namespace loops {

    let onceKeys: string[] = [];

    /**
     * Runs the code at least once, then continues
     * running while the condition is true.
     *
     * @param condition Condition to continue looping
     * @param body Code to execute
     */
    //% blockId=loops_do_while
    //% block="do while $condition"
    //% weight=50
    //% handlerStatement=1
    export function doWhileLoop(
        condition: boolean,
        body: () => void
    ) {
        do {
            body();
        } while (condition);
    }


    /**
     * Repeats the code until the condition becomes true.
     *
     * The condition is checked before each iteration.
     * If the condition is already true, the code does not run.
     *
     * @param condition Condition that stops the loop
     * @param body Code to execute
     */
    //% blockId=loops_repeat_until
    //% block="repeat until $condition"
    //% weight=48
    //% handlerStatement=1
    export function repeatUntil(
        condition: boolean,
        body: () => void
    ) {
        while (!condition) {
            body();
        }
    }


    /**
     * Runs the code only when the condition is false.
     *
     * This is equivalent to:
     * if (!condition) {
     *     body();
     * }
     *
     * @param condition Condition that prevents the code from running
     * @param body Code to execute
     */
    //% blockId=loops_unless
    //% block="unless $condition"
    //% weight=45
    //% handlerStatement=1
    export function unless(
        condition: boolean,
        body: () => void
    ) {
        if (!condition) {
            body();
        }
    }


    /**
     * Repeats the code while the condition is true.
     *
     * The condition is checked before each iteration.
     * If the condition is false, the code does not run.
     *
     * @param condition Condition to continue looping
     * @param body Code to execute
     */
    //% blockId=loops_repeat_while
    //% block="repeat while $condition"
    //% weight=49
    //% handlerStatement=1
    export function repeatWhile(
        condition: boolean,
        body: () => void
    ) {
        while (condition) {
            body();
        }
    }



    /**
     * Runs the code only once for the specified key.
     *
     * Each unique key has its own execution state, allowing
     * multiple independent "run once" blocks to be used.
     *
     * For example, "intro" and "boss" can each run once
     * independently.
     *
     * @param key Unique name used to identify this one-time action
     * @param body Code to execute once
     */
    //% blockId=loops_once
    //% block="run once $key"
    //% key.shadow="loopName" key.defl="default"
    //% weight=43
    //% handlerStatement=1
    export function once(
        key: string,
        body: () => void
    ) {
        if (onceKeys.indexOf(key) < 0) {
            onceKeys.push(key);
            body();
        }
    }

    /**
     * Resets a "run once" key so its code can execute again.
     *
     * @param key Key to reset
     */
    //% blockId=loops_reset_once
    //% block="reset run once $key"
    //% key.shadow="loopName" key.defl="default"
    //% weight=42
    export function resetOnce(key: string) {
        const index = onceKeys.indexOf(key);

        if (index >= 0) {
            onceKeys.removeAt(index);
        }
    }


    /**
     * Repeats the code while the condition is true,
     * up to a maximum number of iterations.
     *
     * The loop stops when either the condition becomes false
     * or the maximum number of iterations is reached.
     *
     * @param condition Condition to continue looping
     * @param maxIterations Maximum number of iterations
     * @param body Code to execute
     */
    //% blockId=loops_while_max
    //% block="while $condition max $maxIterations times"
    //% maxIterations.defl=100
    //% weight=46
    //% handlerStatement=1
    export function whileMax(
        condition: boolean,
        maxIterations: number,
        body: () => void
    ) {
        let iterations = 0;

        while (condition && iterations < maxIterations) {
            body();
            iterations++;
        }
    }


    /**
     * Runs the code once for every item in an array.
     *
     * Each item is passed to the body function.
     *
     * @param items Array of values to iterate through
     * @param body Code to execute for each item
     */
    //% blockId=loops_for_each
    //% block="for each $item in $items"
    //% weight=44
    //% handlerStatement=1
    export function forEach<T>(
        items: T[],
        body: (item: T) => void
    ) {
        for (const item of items) {
            body(item);
        }
    }


    /**
     * Repeats the code until the condition becomes true,
     * up to a maximum number of iterations.
     *
     * The loop stops when either the condition becomes true
     * or the maximum number of iterations is reached.
     *
     * @param condition Condition that stops the loop
     * @param maxIterations Maximum number of iterations
     * @param body Code to execute
     */
    //% blockId=loops_repeat_until_max
    //% block="repeat until $condition max $maxIterations times"
    //% maxIterations.defl=100
    //% weight=47
    //% handlerStatement=1
    export function repeatUntilMax(
        condition: boolean,
        maxIterations: number,
        body: () => void
    ) {
        let iterations = 0;

        while (!condition && iterations < maxIterations) {
            body();
            iterations++;
        }
    }


    // Helper Functions 

    /**
     * get the loop name
     */
    //% blockId=loopName
    //% block="$name"
    //% blockHidden=true shim=TD_ID
    //% name.fieldEditor="autocomplete"
    //% name.fieldOptions.decompileLiterals=true
    //% name.fieldOptions.key="loopName"
    export function _loopName(name: string): string {
        return name
    }




}