import {
	Number0,
	Number1,
	ob1Get0,
	ob1Inc,
	ob1Number0,
	ob1Number1,
} from "@internal/ob1";
import {Position} from "./types";
import {pretty} from "@internal/pretty-format";
import {derivePositionKey} from "./utils";
import {ExtendedMap} from "@internal/collections";
import {AnyPath, equalPaths} from "@internal/path";

type GetPosition = () => Position;

export default class PositionTracker {
	constructor(
		{
			path,
			input,
			offsetPosition = {
				line: ob1Number1,
				column: ob1Number0,
			},
			getPosition,
		}: {
			path: undefined | AnyPath;
			input: string;
			offsetPosition?: Position;
			getPosition?: GetPosition;
		},
	) {
		this.getPosition = getPosition;
		this.path = path;
		this.input = input;

		this.latestPosition = offsetPosition;

		this.positionsToIndex = new ExtendedMap("positionsToIndex");
		this.positionsToIndex.set(derivePositionKey(offsetPosition), ob1Number0);

		this.cachedPositions = new Map();
	}

	private path: undefined | AnyPath;
	private input: string;
	private latestPosition: Position;
	public cachedPositions: Map<Number0, Position>;
	private positionsToIndex: ExtendedMap<string, Number0>;
	private getPosition: undefined | GetPosition;

	public getIndexFromPosition(pos: Position, path: undefined | AnyPath): Number0 {
		if (!equalPaths(path, this.path)) {
			throw new Error(
				pretty`PositionTracker filename mismatch. DiagnosticLocation path ${path} is different than the filename we're tracking of ${this.path}. Position: ${pos}`,
			);
		}

		const index = this.positionsToIndex.assert(derivePositionKey(pos));
		return index;
	}

	public getPositionFromIndex(index: Number0): Position {
		const cached = this.cachedPositions.get(index);
		if (cached !== undefined) {
			return cached;
		}

		let line: Number1 = ob1Number1;
		let column: Number0 = ob1Number0;
		let indexSearchStart: number = 0;

		// Reuse existing line information if possible
		const {latestPosition} = this;
		const latestPositionIndex = this.getIndexFromPosition(
			latestPosition,
			this.path,
		);

		const currPosition =
			this.getPosition === undefined ? undefined : this.getPosition();
		const currPositionIndex =
			currPosition === undefined
				? undefined
				: this.getIndexFromPosition(latestPosition, this.path);

		if (
			currPosition !== undefined &&
			currPositionIndex !== undefined &&
			currPositionIndex > latestPositionIndex &&
			currPositionIndex < index
		) {
			line = currPosition.line;
			column = currPosition.column;
			indexSearchStart = ob1Get0(currPositionIndex);
		} else if (latestPositionIndex < index) {
			line = latestPosition.line;
			column = latestPosition.column;
			indexSearchStart = ob1Get0(latestPositionIndex);
		}

		// Read the rest of the input until we hit the index
		for (let i = indexSearchStart; i < ob1Get0(index); i++) {
			const char = this.input[i];

			if (char === "\n") {
				line = ob1Inc(line);
				column = ob1Number0;
			} else {
				column = ob1Inc(column);
			}
		}

		const pos: Position = {
			line,
			column,
		};

		if (latestPosition === undefined || index > latestPositionIndex) {
			this.latestPosition = pos;
		}

		this.setPositionIndex(pos, index);
		return pos;
	}

	public setPositionIndex(pos: Position, index: Number0) {
		this.positionsToIndex.set(derivePositionKey(pos), index);
		this.cachedPositions.set(index, pos);
	}
}
