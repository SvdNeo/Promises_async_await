fetch('https://example.com/beautiful-young-student-standing-outside-holding-her-book-portrait-smiling-girl-red-close-to-chest-54278111.jpg').then(res=>{return res.blob()}).then(blob=>{document.getElementById("rainbow").src = URL.createObjectURL(blob)})