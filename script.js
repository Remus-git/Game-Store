let firstContainer=$('.firstSectionContainer')
let firstDetails = $('.details')
let pngContainer = $('.pngContainer')
let videoContainer = $('videoContainer::before')
const unactive = $('#unactive')
const all = $('#all')
const popular = $('#popular')
const neww = $('#new')
const suggest = $('#suggest')
let categoriesVal =1;
firstContainer.hover(function(){
    firstDetails.toggle(500)
    pngContainer.slideToggle(100,function(){
    })
    unactive.toggleClass("active")
})
if(categoriesVal = 1){
    all.css("backgroundColor","red")
}
all.click(function(){
    categoriesVal = 1;
    all.css("backgroundColor","red")
    popular.css("backgroundColor","")
    neww.css("backgroundColor","")
    suggest.css("backgroundColor","")
})
popular.click(function(){
    categoriesVal = 2;
    popular.css("backgroundColor","red")
    all.css("backgroundColor","")
    neww.css("backgroundColor","")
    suggest.css("backgroundColor","")
})
neww.click(function(){
    categoriesVal = 3;
    neww.css("backgroundColor","red")
    all.css("backgroundColor","")
    popular.css("backgroundColor","")
    suggest.css("backgroundColor","")
})
suggest.click(function(){
    categoriesVal = 4;
    suggest.css("backgroundColor","red")
    all.css("backgroundColor","")
    neww.css("backgroundColor","")
    popular.css("backgroundColor","")
})
