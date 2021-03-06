/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {humanizeDuration} from "./humanizeDuration";
import {test} from "rome";

test(
	"humanizeDuration",
	(t) => {
		t.inlineSnapshot(humanizeDuration(1), "0.00s");
		t.inlineSnapshot(humanizeDuration(10), "0.01s");
		t.inlineSnapshot(humanizeDuration(100), "0.10s");
		t.inlineSnapshot(humanizeDuration(1_000), "1s");
		t.inlineSnapshot(humanizeDuration(10_000), "10s");
		t.inlineSnapshot(humanizeDuration(100_000), "1m40s");
		t.inlineSnapshot(humanizeDuration(1_000_000), "16m40s");
		t.inlineSnapshot(humanizeDuration(10_000_000), "2h46m40s");
		t.inlineSnapshot(humanizeDuration(100_000_000), "27h46m40s");

		const opts = {allowMilliseconds: true};
		t.inlineSnapshot(humanizeDuration(1, opts), "1ms");
		t.inlineSnapshot(humanizeDuration(10, opts), "10ms");
		t.inlineSnapshot(humanizeDuration(100, opts), "100ms");
		t.inlineSnapshot(humanizeDuration(1_000, opts), "1.00s");
		t.inlineSnapshot(humanizeDuration(10_000, opts), "10.00s");
		t.inlineSnapshot(humanizeDuration(100_000, opts), "1m40.00s");
		t.inlineSnapshot(humanizeDuration(1_000_000, opts), "16m40.00s");
		t.inlineSnapshot(humanizeDuration(10_000_000, opts), "2h46m40.00s");
		t.inlineSnapshot(humanizeDuration(100_000_000, opts), "27h46m40.00s");

		const longOpts = {longform: true};
		t.inlineSnapshot(humanizeDuration(1, longOpts), "0.00 seconds ");
		t.inlineSnapshot(humanizeDuration(10, longOpts), "0.01 seconds ");
		t.inlineSnapshot(humanizeDuration(100, longOpts), "0.10 seconds ");
		t.inlineSnapshot(humanizeDuration(1_000, longOpts), "1 second");
		t.inlineSnapshot(humanizeDuration(10_000, longOpts), "10 seconds");
		t.inlineSnapshot(humanizeDuration(100_000, longOpts), "1 minute 40 seconds");
		t.inlineSnapshot(
			humanizeDuration(1_000_000, longOpts),
			"16 minutes 40 seconds",
		);
		t.inlineSnapshot(
			humanizeDuration(10_000_000, longOpts),
			"2 hours 46 minutes 40 seconds",
		);
		t.inlineSnapshot(
			humanizeDuration(100_000_000, longOpts),
			"27 hours 46 minutes 40 seconds",
		);
	},
);
