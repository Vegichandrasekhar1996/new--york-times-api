let home_url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let world_url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let politics_url = "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let magazine_url ="https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let technology_url ="https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let science_url ="https://api.nytimes.com/svc/topstories/v2/science.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let health_url ="https://api.nytimes.com/svc/topstories/v2/health.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let sports_url ="https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let arts_url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let fashion_url ="https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let food_url ="https://api.nytimes.com/svc/topstories/v2/food.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"
let travel_url ="https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=o9kBVlr6QdcbtcfQSBqQ8tymenlNe6Fz"


function page(uurl){
    document.getElementById("homepage").innerHTML="";
    var Home_page = null;
    const donetwork_call = async() =>{
        try{
        const response = await fetch (uurl);
        const responsedata = await response.json();
        Home_page = responsedata.results
            var homepage_data = document.getElementById('homepage');
            Home_page.forEach(obj => {
                var card = createCountryCards('div','card border-secondary mb-3','cards')
                var row = createCountryCards('div','row')
                var col_8 = createCountryCards('div','col-8')
                var cardbody = createCountryCards('div','card-body')
                var h4 = createCountryCards('h4','text-justify section-card')
                let h4_value =obj.section.toUpperCase();
                h4.innerHTML = h4_value

                var h5 = createCountryCards('h5','text-justify titlecard')
                h5.innerHTML = obj.title

                var h5_1 = createCountryCards('h5','text-justify date-card')
                let dates = obj.created_date
                let final_date = new Date(dates.slice(0,10))
                var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date_year = final_date.getDate()+' '+months[final_date.getMonth()-1]
                h5_1.innerHTML = date_year

                var p = createCountryCards('p','text-justify abstract-card')
                p.innerHTML = obj.abstract

                var a = createCountryCards('a','text-primary')
                a.setAttribute('href',obj.url)
                a.innerHTML ="<b>Continue Reading<b>"
                

                var col_4 =createCountryCards('div','col-4')
                var imgs = createCountryCards('img','img-fluid img-thumbnail','images')
                imgs.setAttribute('src',obj.multimedia[0].url)

                col_4.append(imgs)

                cardbody.append(h4,h5,h5_1,p,a)
                col_8.append(cardbody)
                row.append(col_8,col_4)
                card.append(row) 
                homepage_data.append(card)  
            })
            function createCountryCards(eleName, eleClass= "", eleId=""){
                var element = document.createElement(eleName);
                        element.setAttribute("class",eleClass);
                        element.setAttribute("id",eleId);
                        return element                    
                    }
        
        }
        catch(err){
            console.log(err);
        }
    }

    donetwork_call();

}

page(home_url)



