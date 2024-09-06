function showContent(event, contentId) {
    // Tüm içerikleri gizle
    var contents = document.querySelectorAll('.tab-content')
    contents.forEach(function (content) {
        content.style.display = 'none'
    })

    // Tüm butonlardan "active" sınıfını kaldır
    var buttons = document.querySelectorAll('.tab-button')
    buttons.forEach(function (button) {
        button.classList.remove('active')
    })

    // Seçilen butona "active" sınıfı ekle ve ilgili içeriği göster
    document.getElementById(contentId).style.display = 'block'
    event.currentTarget.classList.add('active')
}

// Sayfa yüklendiğinde başlangıçta gösterilecek içeriği ayarlayın
window.onload = function () {
    showContent(
        { currentTarget: document.querySelector('.tab-button.active') },
        'expertise'
    )
}

//diger animasyon asagida
