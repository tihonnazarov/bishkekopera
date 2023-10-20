import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header className="bg-black text-white p-4 mt-16">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-4xl font-bold">Добро пожаловать в наш театр</h1>
                    <a href="/repertoire" className="text-lg hover:underline">Узнать больше</a>
                </div>
            </header>

            <section className="container mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">О нашем театре</h2>
                <p className="text-lg leading-7">
                    Мы предлагаем уникальные спектакли и мероприятия для всех любителей искусства. Наши актеры и художники работают над каждым представлением с большой страстью и преданностью.
                </p>
            </section>

            {/* Добавьте дополнительный контент, изображения и блоки по вашим потребностям */}
        </div>
    );
};

export default HomePage;
