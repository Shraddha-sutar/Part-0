// Select DOM elements
const saveButton = document.getElementById("save-btn");
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");

// Load notes from localStorage (if any)
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Function to render the notes list
function renderNotes() {
    notesList.innerHTML = ""; // Clear the existing list
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        notesList.appendChild(li);
    });
}

// Event listener for saving the note
saveButton.addEventListener("click", () => {
    const note = noteInput.value.trim();
    
    // Ensure the note is not empty
    if (note) {
        notes.push(note); // Add note to the array
        localStorage.setItem("notes", JSON.stringify(notes)); // Save to localStorage
        renderNotes();    // Re-render the notes list
        noteInput.value = ""; // Clear the input field
    } else {
        alert("Please write a note.");
    }
});

// Render the initial notes list (if any)
renderNotes();
