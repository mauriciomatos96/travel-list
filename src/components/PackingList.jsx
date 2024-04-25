import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onToggleItems, onClearItems }) {

    const [sortBy, setSortBy] = useState("inputs")
    let sortedItems;

    if (sortBy === "inputs") {
        sortedItems = items;
    }
    if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e => setSortBy(e.target.value))}>
                    <option value="inputs">sort by input order</option>
                    <option value="description">sort by description order</option>
                    <option value="packed">sort by packet status</option>
                </select>
                <button onClick={() => onClearItems()}>Clear List</button>
            </div>
        </div>
    )
}