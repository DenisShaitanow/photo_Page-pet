const page = document.querySelector('.pageAbout')

function galleryImages() {
    const images = page.querySelectorAll('.about-imageGallery')
    
    
    images.forEach((image) => {
        image.addEventListener('click', () => {
            
            
            console.log('1')
           const container = page.querySelector('.containerImageModal');
            // Получаем именно img из фрагмента (он там первый и единственный)
            const modalImage = page.querySelector('.imageModal');
            
            // Теперь устанавливаем src для img
            modalImage.src = image.src;

            container.classList.add('containerImageModalVisible');
            
            // Добавляем фрагмент на страницу
            const close = container.querySelector('.close');

            close.addEventListener('click', () => {
                container.classList.remove('containerImageModalVisible');
            })
            
        })
    })
}

galleryImages();