import '../Styles/ExpenseTrackerLuce.css';
import { useState } from "react";


function ExpenseTracker() {
    const [entries, setEntries] = useState([
        { name: "Enter Entries Here", amount: 0 }
    ]);
    const [entryName, setEntryName] = useState('');
    const [entryAmount, setEntryAmount] = useState();

    function addEntry(newEntry) {
        // Don't add a new entry unless they put in a name and an amount
        if (!entryName || !entryAmount) return;
        setEntries([...entries, newEntry]);
        setEntryName('');
        setEntryAmount('');
    }

    function remove(entry) {
        setEntries(
            entries.filter(item => entry.name != item.name)
        )
    }

    return (
        <div>
            <h2>Expense Tracker</h2>
            <table id='entry-container'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((item, index) => (
                        <tr id='entry' key={index}>
                            <td>{item.name}</td>
                            <td>${item.amount}</td>
                            <td><button id='remove-button' onClick={() => remove(item)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <input type='text' placeholder="New Entry Name" value={entryName} onChange={(e) => setEntryName(e.target.value)} />
            <input type='number' placeholder="New Entry Amount" value={entryAmount} onChange={(e) => setEntryAmount(e.target.value)} />
            <button onClick={() => addEntry(
                { name: entryName, amount: entryAmount }
            )}>Add entry</button>
        </div>
    )
}

export default ExpenseTracker;