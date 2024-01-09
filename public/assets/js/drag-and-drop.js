// get the file input and file names container elements
const fileInput = document.getElementById('file-input');
const fileNamesContainer = document.getElementById('file-names');

// add a change event listener to the file input
fileInput.addEventListener('change', (event) => {
  // empty the file names container
  fileNamesContainer.innerHTML = '';

  // get the selected files
  const files = event.target.files;

  // loop through the selected files
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // create a list item for the file
    const listItem = document.createElement('li');

    // create a button for removing the file from the list
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove File';
    removeButton.addEventListener('click', () => {
      // remove the file from the list when the button is clicked
      listItem.remove();

      // remove the file from the input element
      const newFiles = [];
      for (let j = 0; j < files.length; j++) {
        if (files[j] !== file) {
          newFiles.push(files[j]);
        }
      }
      fileInput.files = newFiles;

      // update the file count in the file input element
      fileInput.setAttribute('data-file-count', newFiles.length);
    });

    // set the file name as the text content of the list item
    listItem.innerText = file.name;

    // append the remove button to the list item
    listItem.appendChild(removeButton);

    // append the list item to the file names container
    fileNamesContainer.appendChild(listItem);
  }

  // update the file count in the file input element
  fileInput.setAttribute('data-file-count', files.length);
});

function dropHandler(event) {
  // prevent default behavior (Prevent file from being opened)
  event.preventDefault();

  // get the files that were dropped
  const files = event.dataTransfer.files;

  // add the files to the file input element
  fileInput.files = files;

  // trigger the change event on the file input element
  fileInput.dispatchEvent(new Event('change'));
}
