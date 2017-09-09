window.onload =function ()
{

    function makeArray(photos) {
        console.log(photos);
        /*renderPhotos(JSON.parse(photos));*/
        renderPhotos(photos);
    };

    function getPhotos() {

        var http = new XMLHttpRequest();
        var url = "https://api.unsplash.com/photos?client_id=6d7050135791c2078b9d270a3b3c2dd328aaf7c2830fb2db335659586a284b4f";
        var params = JSON.stringify({client_id: "6d7050135791c2078b9d270a3b3c2dd328aaf7c2830fb2db335659586a284b4f"});
        http.open("GET", url, true);

        http.setRequestHeader("Content-type", "application/json; charset=utf-8");

        http.send();

        http.onreadystatechange = function () {
            if (http.status != 200) {
                alert(http.status + ': ' + http.statusText);
            } else {
                if (http.responseText.length > 0) {
                    console.clear();
                    responseArray = http.responseText;
                    makeArray(responseArray);
                }
            }
        };

    };

    function renderPhotos(arrayPhotos) {
        var content = document.getElementById("content");
        console.log(document.getElementById("content"));
        for (var i = 0; i < arrayPhotos.length; i++) {
            var newImageContainer = document.createElement('div');
            newImageContainer.className = 'img-container';
            content.appendChild(newImageContainer);
            var newImage = document.createElement("img");
            newImage.className = "unplash-image";
            newImage.setAttribute('id',arrayPhotos[i].id);
            newImage.setAttribute("src", arrayPhotos[i].urls.small);
            newImageContainer.appendChild(newImage);

        }
        addOnclick(arrayPhotos);
    };

    var str = [{
        "id": "oF_N89U2BqU",
        "created_at": "2017-09-06T06:17:55-04:00",
        "updated_at": "2017-09-07T05:42:36-04:00",
        "width": 3280,
        "height": 4928,
        "color": "#B1C5D6",
        "likes": 59,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "IFcEhJqem0Q",
            "updated_at": "2017-09-07T05:50:57-04:00",
            "username": "anniespratt",
            "name": "Annie Spratt",
            "first_name": "Annie",
            "last_name": "Spratt",
            "twitter_username": "anniespratt",
            "portfolio_url": "http://mammasaurus.co.uk",
            "bio": "Follow me , say hello and share how you use my photos at Twitter & Instagram @anniespratt ·\r\n         💌 annie@mammasaurus.co.uk\r\n",
            "location": "New Forest National Park, UK",
            "total_likes": 12536,
            "total_photos": 824,
            "total_collections": 41,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1489745565831-f4d9ecdf0195?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=5d9873efe2c93573c4d1c957eaeddd43",
                "medium": "https://images.unsplash.com/profile-1489745565831-f4d9ecdf0195?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=64f6aca9a6ce63ef8113fe4883c2a7d2",
                "large": "https://images.unsplash.com/profile-1489745565831-f4d9ecdf0195?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=2f436cf179be351ec2ce55572739953c"
            },
            "links": {
                "self": "https://api.unsplash.com/users/anniespratt",
                "html": "https://unsplash.com/@anniespratt",
                "photos": "https://api.unsplash.com/users/anniespratt/photos",
                "likes": "https://api.unsplash.com/users/anniespratt/likes",
                "portfolio": "https://api.unsplash.com/users/anniespratt/portfolio",
                "following": "https://api.unsplash.com/users/anniespratt/following",
                "followers": "https://api.unsplash.com/users/anniespratt/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504693057875-d318732b3845",
            "full": "https://images.unsplash.com/photo-1504693057875-d318732b3845?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=be1633b9c8b5c0af0281707cd76ca483",
            "regular": "https://images.unsplash.com/photo-1504693057875-d318732b3845?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6e17aff779269fcab0297b0a58a13af8",
            "small": "https://images.unsplash.com/photo-1504693057875-d318732b3845?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=e35e335c56a6d04e3237e3276cb544df",
            "thumb": "https://images.unsplash.com/photo-1504693057875-d318732b3845?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ff94bfea5935a29f24fe90c91f02c45b"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/oF_N89U2BqU",
            "html": "https://unsplash.com/photos/oF_N89U2BqU",
            "download": "https://unsplash.com/photos/oF_N89U2BqU/download",
            "download_location": "https://api.unsplash.com/photos/oF_N89U2BqU/download"
        }
    }, {
        "id": "4azwjjOcfDI",
        "created_at": "2017-09-05T18:44:33-04:00",
        "updated_at": "2017-09-07T05:05:39-04:00",
        "width": 6016,
        "height": 4016,
        "color": "#1B1F1F",
        "likes": 11,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "OzYg3diyUKA",
            "updated_at": "2017-09-07T05:05:39-04:00",
            "username": "louieomelet",
            "name": "Luyi Yang",
            "first_name": "Luyi",
            "last_name": "Yang",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "",
            "location": null,
            "total_likes": 0,
            "total_photos": 2,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1504651319-f30416ad7365.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=66eaa5020383cf6ff6a8e7e9ae15664b",
                "medium": "https://images.unsplash.com/profile-fb-1504651319-f30416ad7365.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=2ff4e6746bdabe45cca181b7f24e3bc6",
                "large": "https://images.unsplash.com/profile-fb-1504651319-f30416ad7365.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=59588750b187f032c4400815ff8478be"
            },
            "links": {
                "self": "https://api.unsplash.com/users/louieomelet",
                "html": "https://unsplash.com/@louieomelet",
                "photos": "https://api.unsplash.com/users/louieomelet/photos",
                "likes": "https://api.unsplash.com/users/louieomelet/likes",
                "portfolio": "https://api.unsplash.com/users/louieomelet/portfolio",
                "following": "https://api.unsplash.com/users/louieomelet/following",
                "followers": "https://api.unsplash.com/users/louieomelet/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504651370061-322a2e6d1768",
            "full": "https://images.unsplash.com/photo-1504651370061-322a2e6d1768?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=76105344eced7f26f563823353b74a61",
            "regular": "https://images.unsplash.com/photo-1504651370061-322a2e6d1768?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=de781c271d0cfd2567d60dcba8b55f4d",
            "small": "https://images.unsplash.com/photo-1504651370061-322a2e6d1768?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=b3ca9c46707b883870a78487321f56bd",
            "thumb": "https://images.unsplash.com/photo-1504651370061-322a2e6d1768?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=5d26c9ab05c711f63fa2e5e3aa99c35e"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/4azwjjOcfDI",
            "html": "https://unsplash.com/photos/4azwjjOcfDI",
            "download": "https://unsplash.com/photos/4azwjjOcfDI/download",
            "download_location": "https://api.unsplash.com/photos/4azwjjOcfDI/download"
        }
    }, {
        "id": "pO043Xvq7xg",
        "created_at": "2017-09-05T19:01:22-04:00",
        "updated_at": "2017-09-07T05:42:35-04:00",
        "width": 4000,
        "height": 3000,
        "color": "#ECF1F9",
        "likes": 23,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "4p1hhOWeBoU",
            "updated_at": "2017-09-07T05:42:35-04:00",
            "username": "philbalunovic",
            "name": "Philipp Balunovic",
            "first_name": "Philipp",
            "last_name": "Balunovic",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "",
            "location": null,
            "total_likes": 0,
            "total_photos": 8,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1504653446167-137dd8d7b60a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=f90e94aaa00b9c56a7e2a560a1ed418d",
                "medium": "https://images.unsplash.com/profile-1504653446167-137dd8d7b60a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=dd86fe772ee57d3293044f4530b269ea",
                "large": "https://images.unsplash.com/profile-1504653446167-137dd8d7b60a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=d9a612ceb2795aec5e55bab7b3be5cc5"
            },
            "links": {
                "self": "https://api.unsplash.com/users/philbalunovic",
                "html": "https://unsplash.com/@philbalunovic",
                "photos": "https://api.unsplash.com/users/philbalunovic/photos",
                "likes": "https://api.unsplash.com/users/philbalunovic/likes",
                "portfolio": "https://api.unsplash.com/users/philbalunovic/portfolio",
                "following": "https://api.unsplash.com/users/philbalunovic/following",
                "followers": "https://api.unsplash.com/users/philbalunovic/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504652362009-4e63f5a5e0d1",
            "full": "https://images.unsplash.com/photo-1504652362009-4e63f5a5e0d1?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=3e996e489792425dcbee0b7378c57685",
            "regular": "https://images.unsplash.com/photo-1504652362009-4e63f5a5e0d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=dda6641a5922e0474b53f88d6e82e173",
            "small": "https://images.unsplash.com/photo-1504652362009-4e63f5a5e0d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=5636a49f32a655146bfeeb0c735e67fd",
            "thumb": "https://images.unsplash.com/photo-1504652362009-4e63f5a5e0d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=34cb9fd386eaa162c60df07270cf6b70"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/pO043Xvq7xg",
            "html": "https://unsplash.com/photos/pO043Xvq7xg",
            "download": "https://unsplash.com/photos/pO043Xvq7xg/download",
            "download_location": "https://api.unsplash.com/photos/pO043Xvq7xg/download"
        }
    }, {
        "id": "XpqRnutVWCM",
        "created_at": "2017-09-06T03:23:22-04:00",
        "updated_at": "2017-09-07T05:46:10-04:00",
        "width": 6162,
        "height": 4480,
        "color": "#EAEFF3",
        "likes": 18,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "TNGIDpWFX_k",
            "updated_at": "2017-09-07T05:46:22-04:00",
            "username": "louissamal",
            "name": "louis amal",
            "first_name": "louis",
            "last_name": "amal",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "",
            "location": null,
            "total_likes": 2,
            "total_photos": 13,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1504662802-121780c31185.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a7b8f0b22c09771d453613a30ce44aea",
                "medium": "https://images.unsplash.com/profile-fb-1504662802-121780c31185.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=63f170a401e2c45e018d2a04cec1a516",
                "large": "https://images.unsplash.com/profile-fb-1504662802-121780c31185.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=4b32aaac1f99a243e901ff73b5d93bfe"
            },
            "links": {
                "self": "https://api.unsplash.com/users/louissamal",
                "html": "https://unsplash.com/@louissamal",
                "photos": "https://api.unsplash.com/users/louissamal/photos",
                "likes": "https://api.unsplash.com/users/louissamal/likes",
                "portfolio": "https://api.unsplash.com/users/louissamal/portfolio",
                "following": "https://api.unsplash.com/users/louissamal/following",
                "followers": "https://api.unsplash.com/users/louissamal/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504682460496-0e4cac968f1f",
            "full": "https://images.unsplash.com/photo-1504682460496-0e4cac968f1f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=0363a1a3157392f410754610b01b9317",
            "regular": "https://images.unsplash.com/photo-1504682460496-0e4cac968f1f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d15ff2e3196d3b6f1ef715f8d06f7eaa",
            "small": "https://images.unsplash.com/photo-1504682460496-0e4cac968f1f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=aecf6fa86081d5bef04f94df678033d8",
            "thumb": "https://images.unsplash.com/photo-1504682460496-0e4cac968f1f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=6229661e3b4b364a17ee7c87d2bae13a"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/XpqRnutVWCM",
            "html": "https://unsplash.com/photos/XpqRnutVWCM",
            "download": "https://unsplash.com/photos/XpqRnutVWCM/download",
            "download_location": "https://api.unsplash.com/photos/XpqRnutVWCM/download"
        }
    }, {
        "id": "Fazhc5yHNMc",
        "created_at": "2017-09-05T15:29:43-04:00",
        "updated_at": "2017-09-07T05:23:17-04:00",
        "width": 4096,
        "height": 2726,
        "color": "#FBC415",
        "likes": 31,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "OWDPglIqy-E",
            "updated_at": "2017-09-07T05:23:17-04:00",
            "username": "julielaiymani",
            "name": "Julie Laiymani",
            "first_name": "Julie",
            "last_name": "Laiymani",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "",
            "location": null,
            "total_likes": 2,
            "total_photos": 9,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1504641069415-b688588935ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=2dd91c97ad9bf93d51ed1d6f8337dcba",
                "medium": "https://images.unsplash.com/profile-1504641069415-b688588935ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=06d934b75ff32a5807f8fc2dc37d1a80",
                "large": "https://images.unsplash.com/profile-1504641069415-b688588935ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=625a55a60084cad297862d30e9919d1e"
            },
            "links": {
                "self": "https://api.unsplash.com/users/julielaiymani",
                "html": "https://unsplash.com/@julielaiymani",
                "photos": "https://api.unsplash.com/users/julielaiymani/photos",
                "likes": "https://api.unsplash.com/users/julielaiymani/likes",
                "portfolio": "https://api.unsplash.com/users/julielaiymani/portfolio",
                "following": "https://api.unsplash.com/users/julielaiymani/following",
                "followers": "https://api.unsplash.com/users/julielaiymani/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504639729258-5846af948901",
            "full": "https://images.unsplash.com/photo-1504639729258-5846af948901?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ae6a642eaf27c8ea0e97b79660f9bdb0",
            "regular": "https://images.unsplash.com/photo-1504639729258-5846af948901?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f64fa10f6884336ce8f6852e5e9f158f",
            "small": "https://images.unsplash.com/photo-1504639729258-5846af948901?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=5cc4bbf3712b239de16ff1d64a87f312",
            "thumb": "https://images.unsplash.com/photo-1504639729258-5846af948901?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=0cd94dd5683ed26904848515dd6e802c"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/Fazhc5yHNMc",
            "html": "https://unsplash.com/photos/Fazhc5yHNMc",
            "download": "https://unsplash.com/photos/Fazhc5yHNMc/download",
            "download_location": "https://api.unsplash.com/photos/Fazhc5yHNMc/download"
        }
    }, {
        "id": "npzTODbN64s",
        "created_at": "2017-09-05T14:55:10-04:00",
        "updated_at": "2017-09-07T05:42:38-04:00",
        "width": 4217,
        "height": 2793,
        "color": "#F96C56",
        "likes": 32,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "haDVD8eOqIM",
            "updated_at": "2017-09-07T05:44:08-04:00",
            "username": "sylwiabartyzel",
            "name": "Sylwia Bartyzel",
            "first_name": "Sylwia",
            "last_name": "Bartyzel",
            "twitter_username": "SylwiaBartyzel",
            "portfolio_url": "https://www.facebook.com/sylwiabartyzelphotography/",
            "bio": "",
            "location": "Cracow, Poland",
            "total_likes": 161,
            "total_photos": 43,
            "total_collections": 4,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1475143129328-19f2caf0584c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=938b1ae0648453e82a494b0eac48232d",
                "medium": "https://images.unsplash.com/profile-1475143129328-19f2caf0584c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=00a24ddd12a9a519d8fc67b13922da75",
                "large": "https://images.unsplash.com/profile-1475143129328-19f2caf0584c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ca1c4e2707194d04f4f8b1dd6bef4af6"
            },
            "links": {
                "self": "https://api.unsplash.com/users/sylwiabartyzel",
                "html": "https://unsplash.com/@sylwiabartyzel",
                "photos": "https://api.unsplash.com/users/sylwiabartyzel/photos",
                "likes": "https://api.unsplash.com/users/sylwiabartyzel/likes",
                "portfolio": "https://api.unsplash.com/users/sylwiabartyzel/portfolio",
                "following": "https://api.unsplash.com/users/sylwiabartyzel/following",
                "followers": "https://api.unsplash.com/users/sylwiabartyzel/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504637624891-3a5b76e8f5d4",
            "full": "https://images.unsplash.com/photo-1504637624891-3a5b76e8f5d4?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=2d419c69dddf594da67407484131c16c",
            "regular": "https://images.unsplash.com/photo-1504637624891-3a5b76e8f5d4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a10765d3652ac9c4774f8091b1340d2b",
            "small": "https://images.unsplash.com/photo-1504637624891-3a5b76e8f5d4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=64a3963ce3b1b23eec65d4795c3bdd2f",
            "thumb": "https://images.unsplash.com/photo-1504637624891-3a5b76e8f5d4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=6baf5281f078818fee19113a86fe9d37"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/npzTODbN64s",
            "html": "https://unsplash.com/photos/npzTODbN64s",
            "download": "https://unsplash.com/photos/npzTODbN64s/download",
            "download_location": "https://api.unsplash.com/photos/npzTODbN64s/download"
        }
    }, {
        "id": "wGKCaRbElmk",
        "created_at": "2017-09-05T11:55:22-04:00",
        "updated_at": "2017-09-07T05:21:20-04:00",
        "width": 3306,
        "height": 4952,
        "color": "#090606",
        "likes": 39,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "tXogetGDtQY",
            "updated_at": "2017-09-07T05:47:11-04:00",
            "username": "ismaelnieto",
            "name": "Cristian Newman",
            "first_name": "Cristian",
            "last_name": "Newman",
            "twitter_username": null,
            "portfolio_url": "https://www.facebook.com/IsmaenNieto",
            "bio": "",
            "location": "Yuriria Guanajuato México",
            "total_likes": 194,
            "total_photos": 147,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1474902131241-14252b598175?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=78bd1d394e193b74667503d273e30af5",
                "medium": "https://images.unsplash.com/profile-1474902131241-14252b598175?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=f120bfc4be4c1d1ed865def1f89e279d",
                "large": "https://images.unsplash.com/profile-1474902131241-14252b598175?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=1bbf9df6df9ed662012373505f9e3f9e"
            },
            "links": {
                "self": "https://api.unsplash.com/users/ismaelnieto",
                "html": "https://unsplash.com/@ismaelnieto",
                "photos": "https://api.unsplash.com/users/ismaelnieto/photos",
                "likes": "https://api.unsplash.com/users/ismaelnieto/likes",
                "portfolio": "https://api.unsplash.com/users/ismaelnieto/portfolio",
                "following": "https://api.unsplash.com/users/ismaelnieto/following",
                "followers": "https://api.unsplash.com/users/ismaelnieto/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504626877899-b3670586ac9f",
            "full": "https://images.unsplash.com/photo-1504626877899-b3670586ac9f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ccb910ebd94e0b19f3ef7229b153dcf6",
            "regular": "https://images.unsplash.com/photo-1504626877899-b3670586ac9f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=507d04387c5eaf9081684c2f2a07bc51",
            "small": "https://images.unsplash.com/photo-1504626877899-b3670586ac9f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=452541e9581a9c19a6c268321711bdb1",
            "thumb": "https://images.unsplash.com/photo-1504626877899-b3670586ac9f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=2115f8c3eb6c2ea13d51bf0a900604ab"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/wGKCaRbElmk",
            "html": "https://unsplash.com/photos/wGKCaRbElmk",
            "download": "https://unsplash.com/photos/wGKCaRbElmk/download",
            "download_location": "https://api.unsplash.com/photos/wGKCaRbElmk/download"
        }
    }, {
        "id": "fO02jkg4Nio",
        "created_at": "2017-09-05T11:49:55-04:00",
        "updated_at": "2017-09-07T05:21:24-04:00",
        "width": 3071,
        "height": 2056,
        "color": "#18130A",
        "likes": 18,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "Vlo_o8_VSHU",
            "updated_at": "2017-09-07T05:21:24-04:00",
            "username": "duffybrook",
            "name": "Duffy Brook",
            "first_name": "Duffy",
            "last_name": "Brook",
            "twitter_username": "duffybrook",
            "portfolio_url": null,
            "bio": "human.",
            "location": "Durango, CO",
            "total_likes": 41,
            "total_photos": 30,
            "total_collections": 2,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1498529973356-6ddd76040ff8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=2943f07083e78382ed4ff5ee2b8ac6c8",
                "medium": "https://images.unsplash.com/profile-1498529973356-6ddd76040ff8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=f7a365766f1a1685d8e47ef536a89dd5",
                "large": "https://images.unsplash.com/profile-1498529973356-6ddd76040ff8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=e5f79356b9b403dfa7ad67b91f1446e9"
            },
            "links": {
                "self": "https://api.unsplash.com/users/duffybrook",
                "html": "https://unsplash.com/@duffybrook",
                "photos": "https://api.unsplash.com/users/duffybrook/photos",
                "likes": "https://api.unsplash.com/users/duffybrook/likes",
                "portfolio": "https://api.unsplash.com/users/duffybrook/portfolio",
                "following": "https://api.unsplash.com/users/duffybrook/following",
                "followers": "https://api.unsplash.com/users/duffybrook/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504626452618-1a257bab993d",
            "full": "https://images.unsplash.com/photo-1504626452618-1a257bab993d?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=5c47d8855a695d9da3d993c0d1c2f89b",
            "regular": "https://images.unsplash.com/photo-1504626452618-1a257bab993d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ce7cfb463aa2706e101cfb9c1affe1bd",
            "small": "https://images.unsplash.com/photo-1504626452618-1a257bab993d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=c2c026bb06022ec63519f20a7f0166c9",
            "thumb": "https://images.unsplash.com/photo-1504626452618-1a257bab993d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=57eac59acbe74901672ca962be61a70f"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/fO02jkg4Nio",
            "html": "https://unsplash.com/photos/fO02jkg4Nio",
            "download": "https://unsplash.com/photos/fO02jkg4Nio/download",
            "download_location": "https://api.unsplash.com/photos/fO02jkg4Nio/download"
        }
    }, {
        "id": "CIuakYIjadc",
        "created_at": "2017-09-05T04:05:26-04:00",
        "updated_at": "2017-09-07T05:14:43-04:00",
        "width": 2848,
        "height": 4288,
        "color": "#060607",
        "likes": 35,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "UkzkDJp4t0U",
            "updated_at": "2017-09-07T05:14:44-04:00",
            "username": "julensan09",
            "name": "Julentto Photography",
            "first_name": "Julentto",
            "last_name": "Photography",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "Instagram: @julentto",
            "location": "Basque Country",
            "total_likes": 18,
            "total_photos": 7,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1483444136-faa69608fdbc.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=5055f94d83a52e1e9fc6aebdc3e59e7d",
                "medium": "https://images.unsplash.com/profile-fb-1483444136-faa69608fdbc.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=f64505750ed8114076e9b33f31e20224",
                "large": "https://images.unsplash.com/profile-fb-1483444136-faa69608fdbc.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=58ddc39b749e678cdea0a885c57636b5"
            },
            "links": {
                "self": "https://api.unsplash.com/users/julensan09",
                "html": "https://unsplash.com/@julensan09",
                "photos": "https://api.unsplash.com/users/julensan09/photos",
                "likes": "https://api.unsplash.com/users/julensan09/likes",
                "portfolio": "https://api.unsplash.com/users/julensan09/portfolio",
                "following": "https://api.unsplash.com/users/julensan09/following",
                "followers": "https://api.unsplash.com/users/julensan09/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504598318550-17eba1008a68",
            "full": "https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=750d669c6f8dbd2a2dacc8235f32edbb",
            "regular": "https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=592a981b025f02e458c17496356c85d3",
            "small": "https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=7755f4a8fd26a9c57b1bd004f8da0214",
            "thumb": "https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=970b55340921f6bbdd2952aaa7e7f1e0"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/CIuakYIjadc",
            "html": "https://unsplash.com/photos/CIuakYIjadc",
            "download": "https://unsplash.com/photos/CIuakYIjadc/download",
            "download_location": "https://api.unsplash.com/photos/CIuakYIjadc/download"
        }
    }, {
        "id": "StFUwkNsvcY",
        "created_at": "2017-09-06T02:27:46-04:00",
        "updated_at": "2017-09-07T04:57:05-04:00",
        "width": 5323,
        "height": 3549,
        "color": "#1C1512",
        "likes": 27,
        "liked_by_user": false,
        "description": null,
        "user": {
            "id": "7rhBmzxHi-0",
            "updated_at": "2017-09-07T05:27:31-04:00",
            "username": "vorosbenisop",
            "name": "Benjamin Voros",
            "first_name": "Benjamin",
            "last_name": "Voros",
            "twitter_username": "voros_benjamin",
            "portfolio_url": "http://www.vorosbenjamin.com",
            "bio": "",
            "location": "Hungary, 9400 Sopron Boldogasszonyi utca 10",
            "total_likes": 758,
            "total_photos": 62,
            "total_collections": 0,
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1501580705195-e3eda67a7256?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=fb143ee1ab48c5e918f10c444e0a7dd4",
                "medium": "https://images.unsplash.com/profile-1501580705195-e3eda67a7256?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=a584a67fb5fae9445bb5d928d8abc2cb",
                "large": "https://images.unsplash.com/profile-1501580705195-e3eda67a7256?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=35df8ac5bf4bba49e488bc4afc294c3c"
            },
            "links": {
                "self": "https://api.unsplash.com/users/vorosbenisop",
                "html": "https://unsplash.com/@vorosbenisop",
                "photos": "https://api.unsplash.com/users/vorosbenisop/photos",
                "likes": "https://api.unsplash.com/users/vorosbenisop/likes",
                "portfolio": "https://api.unsplash.com/users/vorosbenisop/portfolio",
                "following": "https://api.unsplash.com/users/vorosbenisop/following",
                "followers": "https://api.unsplash.com/users/vorosbenisop/followers"
            }
        },
        "current_user_collections": [],
        "urls": {
            "raw": "https://images.unsplash.com/photo-1504679194239-39f4b4172e0c",
            "full": "https://images.unsplash.com/photo-1504679194239-39f4b4172e0c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=cbd3b8e59bbca34311e09561c3d35de3",
            "regular": "https://images.unsplash.com/photo-1504679194239-39f4b4172e0c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=b7fa0ca5ef096890fd3c46fcd3312e77",
            "small": "https://images.unsplash.com/photo-1504679194239-39f4b4172e0c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=d5cddc4257372cc14b205bbffc3794ef",
            "thumb": "https://images.unsplash.com/photo-1504679194239-39f4b4172e0c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=bf2b3d55d70eb3b3c5f1cd86434e8f86"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/StFUwkNsvcY",
            "html": "https://unsplash.com/photos/StFUwkNsvcY",
            "download": "https://unsplash.com/photos/StFUwkNsvcY/download",
            "download_location": "https://api.unsplash.com/photos/StFUwkNsvcY/download"
        }
    }];


    function addOnclick(arrayPhotos) {
        var images = document.getElementsByClassName('unplash-image');
        for(var i=0; i<images.length; i++){
            images[i].addEventListener('click', scale);
            images[i].setAttribute('scale', 'no');
        };

        function scale(event) {
            for(var i=0; i< arrayPhotos.length; i++){
                if(arrayPhotos[i].id == event.target.getAttribute('id')){
                    if(event.target.getAttribute('scale') == 'no') {
                        event.target.setAttribute('src', arrayPhotos[i].urls.full);
                        event.target.parentNode.style['max-width'] = '100%';
                        event.target.parentNode.style['max-height'] = '100%';
                        event.target.setAttribute('scale', 'yes');
                    }else {
                        event.target.setAttribute('src', arrayPhotos[i].urls.small);
                        event.target.parentNode.style['max-width'] = '30%';
                        event.target.setAttribute('scale', 'no');
                    }

                };
            };
        };


    };

    makeArray(str);

};