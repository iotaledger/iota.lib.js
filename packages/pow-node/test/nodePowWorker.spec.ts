// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { doPow } from "../src/nodePowWorker";

describe("nodePowWorker", () => {
    test("can run the powWorker and get a result from index 0", () => {
        const nonce = doPow(new Uint8Array(32).fill(1), 3, BigInt(0));
        expect(nonce).toEqual(BigInt(86));
    });

    test("can run the powWorker and get a result from index 25600", () => {
        const nonce = doPow(new Uint8Array(32).fill(1), 8, BigInt(25600));
        expect(nonce).toEqual(BigInt(25689));
    });
});
