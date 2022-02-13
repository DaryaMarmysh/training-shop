import React from 'react';
import Galery from '../Galery/Galery';
import Advantage from '../Advantage/Advantage';
import News from '../News/News';
import Subscribe from '../Subscribe/Subscribe';
import Block from '../Block/Block';
import Icons from '../Icons/Icons';
import Catalog from '../Catalog/Catalog';
import MainPageCatalogHeader from '../MainPageCatalogHeader/MainPageCatalogHeader';
import { men_items } from '../Pages/Men/Men';
import { women_items } from '../Pages/Women/Women';
import ButtonSeeAll from '../ButtonSeeAll/ButtonSeeAll';
import { Link } from 'react-router-dom';
function Home() {
    return <div>
        <Galery />
        <div className="clothes" data-test-id={"clothes-women"}>
            <MainPageCatalogHeader title='WOMEN’S' />
            <Catalog arr={women_items} />
            <Link key={2} to="/women" className='menu-item' data-test-id={'menu-link-women'}>
                <ButtonSeeAll title='women' /></Link>
        </div>
        <div className="clothes" data-test-id={"clothes-men"}>
            <MainPageCatalogHeader title='MEN’S' />
            <Catalog arr={men_items} />
            <Link key={3} to={`/men`} className='menu-item' data-test-id={'menu-link-men'}>
                <ButtonSeeAll title='men' />
            </Link>
        </div>
        <Advantage />
        <News />
        <Subscribe />
        <Block />
        <Icons />
    </div>





}
export default Home;
