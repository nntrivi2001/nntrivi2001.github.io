const modal = parent.document.getElementById('modal');
const fullscreen_img = parent.document.getElementById('fs-img');
const imgs = document.querySelectorAll('#photos img');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullscreen_img.src = this.getAttribute("src");
    modal.style.display = 'block';
  });
});


// Vietnam Map
let provinceInfo = document.querySelector('#province');
let provinceName = document.querySelector('#province-name');
let traveled_picture = document.querySelector('#traveled-picture');
let provinces = document.querySelectorAll('path');


provinces.forEach(province => {
  province.addEventListener('mouseenter', (e)=> {
    provinceName.innerHTML = province.getAttribute('title');
    provinceInfo.style.opacity = 1;
    // console.log(provinceName, 'x: ', e.clientX, 'y: ', e.clientY);
    provinceInfo.style.top = e.clientY + 'px';
    provinceInfo.style.left = e.clientX + 'px';

    // Kiểm tra nếu có class 'traveled'
    if (province.classList.contains('traveled')) {
      const imgPath = images[province.id]; // Lấy đường dẫn ảnh từ đối tượng ánh xạ
      // Mở ảnh
      if (imgPath) {
        traveled_picture.src = imgPath;

    }}
  });
  province.addEventListener('mouseout', (e)=> {
    traveled_picture.src = ""
    provinceInfo.style.opacity = 0;
  })
})


// Đối tượng ánh xạ id của path với đường dẫn ảnh
const images = {
  "VN-01": "",  "VN-02": "",
  "VN-03": "",  "VN-04": "",
  "VN-05": "",  "VN-06": "",
  "VN-07": "",  "VN-09": "",
  "VN-13": "",  "VN-14": "",
  "VN-15": "",  "VN-18": "",
  "VN-20": "",  "VN-21": "",
  "VN-22": "",  "VN-23": "",
  "VN-24": "",  "VN-25": "",
  "VN-26": "",  "VN-27": "",
  "VN-28": "",  "VN-29": "",
  "VN-30": "",  "VN-31": "",
  "VN-32": "",  "VN-33": "",
  "VN-34": "",  "VN-35": "",
  "VN-36": "",  "VN-37": "",
  "VN-39": "",  "VN-40": "",
  "VN-41": "",  "VN-43": "assets/img/VungTau.png",
  "VN-44": "",  "VN-45": "",
  "VN-46": "",  "VN-47": "",
  "VN-49": "",  "VN-50": "",
  "VN-51": "",  "VN-52": "",
  "VN-53": "",  "VN-54": "",
  "VN-55": "",  "VN-56": "",
  "VN-57": "",  "VN-58": "",
  "VN-59": "",  "VN-61": "",
  "VN-63": "",  "VN-66": "",
  "VN-67": "",  "VN-68": "",
  "VN-69": "",  "VN-70": "",
  "VN-71": "",  "VN-72": "",
  "VN-73": "",  "VN-CT": "",
  "VN-DN": "",  "VN-HN": "",
  "VN-HP": "",  "VN-SG": "assets/img/SaiGon.jpg",
  "VN-HS": "",  "VN-TS": "",
  "VN-PQ": "",  "VN-CD": "",
  "VN-CLT": "",
};

const description = {
  "VN-01": "",  "VN-02": "",
  "VN-03": "",  "VN-04": "",
  "VN-05": "",  "VN-06": "",
  "VN-07": "",  "VN-09": "",
  "VN-13": "",  "VN-14": "",
  "VN-15": "",  "VN-18": "",
  "VN-20": "",  "VN-21": "",
  "VN-22": "",  "VN-23": "",
  "VN-24": "",  "VN-25": "",
  "VN-26": "",  "VN-27": "",
  "VN-28": "",  "VN-29": "",
  "VN-30": "",  "VN-31": "",
  "VN-32": "",  "VN-33": "",
  "VN-34": "",  "VN-35": "",
  "VN-36": "",  "VN-37": "",
  "VN-39": "",  "VN-40": "",
  "VN-41": "",  "VN-43": "",
  "VN-44": "",  "VN-45": "",
  "VN-46": "",  "VN-47": "",
  "VN-49": "",  "VN-50": "",
  "VN-51": "",  "VN-52": "",
  "VN-53": "",  "VN-54": "",
  "VN-55": "",  "VN-56": "",
  "VN-57": "",  "VN-58": "",
  "VN-59": "",  "VN-61": "",
  "VN-63": "",  "VN-66": "",
  "VN-67": "",  "VN-68": "",
  "VN-69": "",  "VN-70": "",
  "VN-71": "",  "VN-72": "",
  "VN-73": "",  "VN-CT": "",
  "VN-DN": "",  "VN-HN": "",
  "VN-HP": "",  "VN-SG": "",
  "VN-HS": "",  "VN-TS": "",
  "VN-PQ": "",  "VN-CD": "",
  "VN-CLT": "",
};