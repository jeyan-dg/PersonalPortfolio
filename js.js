document.addEventListener("DOMContentLoaded", () => {
    const fills = document.querySelectorAll(".fill");
    fills.forEach(fill => {
        const percent = fill.getAttribute("data-percent");
        fill.style.width = percent + "%";
    });
});

function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0"; 
    } else {
        menu.style.width = "250px"; 
    }
}

function showImage(category) {
    let imageContainer;

    if (category === "eating" || category === "sleeping" || category === "watching" || category === "music" || category === "reading") {
        imageContainer = document.getElementById("hobby-image");
    } else if (category === "browny" || category === "hiking" || category === "instruments" || category === "arts" || category === "noise") {
        imageContainer = document.getElementById("interest-image");
    }

  
    if (imageContainer.innerHTML !== "") {
     
        imageContainer.innerHTML = "";
    } else {
     
        let imgElement = document.createElement("img");
        
        switch (category) {
            case "eating":
                imgElement.src = "https://instagram.fcrk2-3.fna.fbcdn.net/v/t1.15752-9/480063089_674877201536150_2774294025892058256_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Sg-FLVxotBcQ7kNvgHj7VeQ&_nc_oc=AdgbsU2AFUc-p_tnRcfZyv_EE-sWRC7HE7C3oMvHpqSJR6tElarqlWp30Ma-q8MYOxhnxbBrGFbR6iETLobaR5Wa&_nc_zt=23&_nc_ht=instagram.fcrk2-3.fna&oh=03_Q7cD1gE_dh_QS12vCtiewQRI4io-M21epbHxtMc2y3_wHaf3eQ&oe=67DBDC18";
                break;
            case "sleeping":
                imgElement.src = "https://instagram.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/477024155_543627618066162_9055343703015208072_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=K-1OmsE-mnAQ7kNvgFy60vg&_nc_oc=AdipqFpolSMuG2U5_3x-aIXl5PYxlEQwHUuLzOHohH7GeUxgQq9TvfZVRn7AXQqMlio1ZG9oVWjAy6UABsNpApb2&_nc_zt=23&_nc_ht=instagram.fcrk2-2.fna&oh=03_Q7cD1gGGab6CK3SwFjDGV4IgwyUUM7OxErYa0nsxdbbzDYwxDQ&oe=67DBF541";
                break;
            case "watching":
                imgElement.src = "https://scontent.fcrk2-3.fna.fbcdn.net/v/t1.15752-9/479691117_1992789364539974_8679125244525499018_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xFMD0o19EswQ7kNvgEDk3jo&_nc_oc=AdiGo0W1u5H2rKODsHbuAKiUQOCjNE5Qp3G0fYdEKjo8Yqt4DI5jMMEfppSfSoygdpcQPtHR1CuQWsGiIyZZs6nD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk2-3.fna&oh=03_Q7cD1gFkE3BeyeKEMDtT8icJPbKZXeS5-gf76GZPmuvzGXMERg&oe=67DAAA40";
                break;
            case "music":
                imgElement.src = "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/476882192_1614148709492020_7069077322405822933_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xkN_PRQACyMQ7kNvgEZidnv&_nc_oc=AdgA1Bi0PpOS1N3wptRt0BNrUq-DiOicGeG7Mu9TEVm50azB-0uY0EqFAXYDWMDUYKktA_c0X8kvpEgBkDpsTXK-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&oh=03_Q7cD1gHCcj88EBbNGQrmFRSvP6CGqvQ9XPmnpK5WEy_-_dGTIQ&oe=67DBF6E2";
                break;
            case "reading":
                imgElement.src = "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.15752-9/476562293_9404352419621021_7354849291037184384_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=oWKpzju_mboQ7kNvgEdQ1xK&_nc_oc=AdictirlmLJTkJZot_5-BdszCKlxK4c7jn8gIcAtg7XlxHF38ZurknB0FlD3Zudt-FB3bM2R9WD7KYMKufEqUOS9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=03_Q7cD1gHzZ6BmwyDuZU8Iy6dhZc-YwOy7VbxXuYE57VDiqJ5xYA&oe=67DAD9C2";
                break;
			 case "browny":
                imgElement.src = "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.15752-9/476717985_1281289419823411_2882376510292555294_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=GsnyZxYE2v8Q7kNvgHr9GyL&_nc_oc=AdjrG0fg4J7xLkmkaycc83ECfLASPZ0WiXRt9UAGK-v1VuVYLCQzZ_cea4XeJJVX5PmlOM2l8CdIqSPIv3xAy8T4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=03_Q7cD1gEIaZzM0FfIdpqblMol6vGcf1_CN5kfyPtjGXf7sBNehw&oe=67DC03F8";  
                break;
            case "hiking":
                imgElement.src = "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.15752-9/476974947_655473270249511_1785435146413916689_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cGr4FnMxo7MQ7kNvgHCeQri&_nc_oc=Adi3qpmY1NclRuF50wiRvKmlkKvVkbIYWL1Pk62uhSr_mbbQgOMXHShEPrySPFP9l5fx-UamcPys9YZkSfIhf6fM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=03_Q7cD1gHPZiNmD5I9hlOJ75-tW17r88X5bfBzsUP8ZveAwx5eZg&oe=67DBE938"; 
                break;
            case "instruments":
                imgElement.src = "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/477059011_1618859038743191_2354831010937133821_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=nUOLRp9aFxkQ7kNvgGydUCC&_nc_oc=AdjcVlGOZtm0jEar9LUmXg1ZTiFqQ3sJHNH7TznXATBiy5ku5ceVgdpvzBa0pKljnMFRwuI8SDOhK46wVcNqLc2c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&oh=03_Q7cD1gGpklHZX7xDZBvdqD1s-OSCApH0NRrzfIEocHwUo1tKRQ&oe=67DC0432";  
                break;
            case "arts":
                imgElement.src = "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/477001287_1760153794535750_4156799801237035745_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DT2khKS2emYQ7kNvgGZLn4w&_nc_oc=AdgBGZ5y0j4QKRIjZnJcbB0qzAqnYmgLywWWzKu232Bub3M-F1barK09cAfp9v8xsJK3o5IqpeM_squnVtKitvnN&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&oh=03_Q7cD1gFnhjwfqWXxvZbWp4WRU1htA0ruolX7W4cx1FUhCdpSSQ&oe=67DBE16F"; 
                break;
			case "noise":
                imgElement.src = "https://scontent.fcrk2-3.fna.fbcdn.net/v/t1.15752-9/474877619_873774874724031_4812176226850122027_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=eTS2uOHfkvQQ7kNvgHHtMYP&_nc_oc=Adj6hHlStEzodMxfIds3yU6GT-pEcUtmQlcnNFZY3SLsrVrYp2CepMAn9-4XbPbssZsVH2CPlfj7NnP_3KCP-eUA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcrk2-3.fna&oh=03_Q7cD1gEExoYJP2RoXGQE3ioLQjw4Oad7TlqMq5Q15ByUT7f3NA&oe=67DBE670"; 
                break;
            default:
                imgElement.src = ""; 
                break;
        }
		
        imageContainer.appendChild(imgElement);
    }
}
