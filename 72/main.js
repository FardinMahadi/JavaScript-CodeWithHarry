function renderNotes() {
  let noteBox = document.getElementById("cardBox");
  noteBox.innerHTML = ""; // Clear the note box

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note) => {
    noteBox.innerHTML += `
            <div class="p-5 bg-gray-500 rounded-md text-left border-2 border-gray-400">
              <h2 class="title mb-3 text-2xl text-white font-medium poppins-static">
                ${note.title}
              </h2>
              <p class="text-gray-300 text-sm">
                ${note.text}
              </p>
            </div>`;
  });
}

// Call renderNotes on page load to display any existing notes
window.onload = function () {
  renderNotes();
};

function addNote() {
  let title = prompt("Enter the title: ");
  let text = prompt("Enter the note: ");

  if (title || text) {
    // Create a note object
    let note = {
      title: title,
      text: text,
    };

    // Save the note to localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Re-render the notes to include the new one
    renderNotes();
  }
}

function removeNote() {
  let titleToRemove = prompt("Enter the title: ");
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Filter out the note with the specified title
  notes = notes.filter((note) => note.title !== titleToRemove);

  // Update localStorage with the new array of notes
  localStorage.setItem("notes", JSON.stringify(notes));

  // Re-render the notes
  renderNotes();
}
