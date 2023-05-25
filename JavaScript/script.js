function downloadFile(url, fileName){
    fetch(url, {method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer'})
    .then(res => res.blob())
    .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download',fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
    });
};
document.querySelector('span').onclick=function(){
    downloadFile('image/MADHAVRAJ_CV.pdf','madhav_cv.pdf');
}