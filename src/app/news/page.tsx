import './style.css'

export default function News() {
    const news = [
        {
            id: 1,
            title: 'Новость дня',
            description: "Легендарному дереву уже более 1000 лет, оно стоит на обрыве скалы и показывает себя во всей красе уже который год, туристы часто фотографируются возле этого дерева на память, но есть и исключения те которые хотят вырубить данное дерево",
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/58f60527666431.56368c2348eca.jpg'
        },
        {
            id: 2,
            title: 'Туризм',
            description: "Команда которая занимается туризмом предлагает вашему вниманию красивейшее место на земле, всего за 1 000$ вы можете посетить его и посмотреть на его особенности, с вами будет 5 сопровождающих которые помогут вам в вашем путешествии, покажут вам красивые места, а так же расскажут историю о данном месте, напишите нам и мы обязательно вам ответим в течении некоторого времени.",
            image: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1613666278_10-p-fon-dlya-prezentatsii-reka-10.jpg'
        }
    ]
    return (
        <div>
            {
                news.map(elem => <div className="new__items">
                    <div className='new__item'>
                        <h1 className="new__item__title">{elem.title}</h1>
                        <p className="new__item__description">{elem.description}</p>
                        {
                            elem.image && <img src={elem.image} className='new__item__image' />
                        }
                        <input type="text" className='new__item__comment' placeholder="Написать комментарий..."/>
                    </div>
                </div>)
            }
        </div>
    )
}