$(document).ready(function() {

    //МЕНЯТЬ ТЕКСТ ЗДЕСЬ
    const EN = {
        topHeader: 'Amazingly Comfortable Smiley Teether For The Happy Little Ones',
        productPlus1: 'Food Grade Silicone',
        productPlus2: 'Gum Massaging',
        productPlus3: 'Advanced Design',
        description1: 'The Doctor Teether is a must-have soothing teether for your child. This adorable and stylish design has premium quality and suitable for every child. The perfect size and shape are designed with love for the little hands to hold.',
        description2: 'Quality products come with CE / FDA / EN71 / CPC / ASTM certificates. Doctor Teether has undergone tests by adept certification institutions for the US and Europe.',
        instagramText: 'Don’t miss our Instagram contests! @DoctorTeether',
        questionText: 'Do you have questions?',
        emailToText: 'E-mail Us',
        copyright: 'Copyright © 2021. Doctor Teether is a registered trademark in the US. Product design patented!'
    }
    const RU = {
        topHeader: 'Удивительно удобный прорезыватель с улыбкой для счастливых малышей',
        productPlus1: 'Food Grade Silicone',
        productPlus2: 'Gum Massaging',
        productPlus3: 'Advanced Design',
        description1: 'Прорезыватель для зубов Doctor Teether - это незаменимый успокаивающий прорезыватель для Вашего ребенка. Этот очаровательный и стильный дизайн премиум-класса будет удобным для каждого малыша. Идеальные размер и форма прорезывателя созданы с любовью, чтобы держать его в маленьких руках.',
        description2: 'Качественная продукция поставляется с сертификатами CE / FDA / EN71 / CPC / ASTM. Doctor Teether прошел испытания в специализированных сертификационных учреждениях США и Европы.',
        instagramText: 'Don’t miss our Instagram contests! @DoctorTeether',
        questionText: 'Do you have questions?',
        emailToText: 'E-mail Us',
        copyright: 'Copyright © 2021. Doctor Teether is a registered trademark in the US. Product design patented!'
    }
    const UK = {
        topHeader: 'Надзвичайно зручний прорізувач з посмішкою для щасливих малюків',
        productPlus1: 'Food Grade Silicone',
        productPlus2: 'Gum Massaging',
        productPlus3: 'Advanced Design',
        description1: "Прорізувач для зубів Doctor Teether - це незамінний заспокійливий прорізувач для Вашого малюка. Він має чарівний і стильний дизайн преміум-класу, який підходить кожній дитині. Ідеальні розмір і форма прорізувача створені з любов'ю, щоб тримати його в маленьких руках.",
        description2: 'Якісна продукція поставляється з сертифікатами CE / FDA / EN71 / CPC / ASTM. Doctor Teether пройшов випробування в спеціалізованих сертифікаційних установах США і Європи.',
        instagramText: 'Don’t miss our Instagram contests! @DoctorTeether',
        questionText: 'Do you have questions?',
        emailToText: 'E-mail Us',
        copyright: 'Copyright © 2021. Doctor Teether is a registered trademark in the US. Product design patented!'
    }
    ////////////////////////////////////////////////

    
    var language = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "en";
    language = language.substr(0, 2).toLowerCase();
    let contentText;
    if(language == "en"){
        contentText = EN;
    }
    else if(language == "ru"){
        contentText = RU;
    }
    else if(language == "uk"){
        contentText = UK;
    }
    else{
        contentText = EN;
    }
    
    function changeText(content){
        $('#topHeader').text(content.topHeader)
        $('#productPlus1').text(content.productPlus1);
        $('#productPlus2').text(content.productPlus2);
        $('#productPlus3').text(content.productPlus3);
        $('#description1').text(content.description1);
        $('#description2').text(content.description2);
        $('#instagramText').text(content.instagramText);
        $('#questionText').text(content.questionText);
        $('#emailToText').text(content.emailToText);
        $('#copyright').text(content.copyright);
    }
    changeText(contentText)
});
