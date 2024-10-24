
import { test } from 'vitest';
import {render} from "@testing-library/svelte";
import { App } from "../../App.svelte";

export let name;
test('renders the name prop correctly',async () => {
    const { getByText } = render(App);
    const incrementbutton = getByText('Count is 0');
    await fireEvent.click(incrementbutton);
    getByText('Count is 1');
});
