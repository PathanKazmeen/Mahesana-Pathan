document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const dataDisplay = document.getElementById('dataDisplay');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                dataDisplay.textContent = e.target.result;
            };
            reader.readAsText(file);
        }
    });
});
