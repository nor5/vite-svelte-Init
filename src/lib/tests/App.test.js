
import { test } from 'vitest';
import {render} from "@testing-library/svelte";
import { APP } from "../APP.sevlte";
import { fireEvent } from "../../../node_modules/@testing-library/svelte/types/pure";
export let name;
test('renders the name prop correctly',async () => {
    const { getByText } = render(APP);
    const incrementbutton = getByText('Count is 0');
    await fireEvent.click(incrementbutton);
    getByText('Count is 1');
});
