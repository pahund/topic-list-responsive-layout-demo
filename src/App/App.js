import React, { Fragment } from 'react';
import SuperBanner from '../SuperBanner';
import Skyscraper from '../Skyscraper';
import FireplaceColumns from '../FireplaceColumns';
import ActionBar from '../ActionBar';
import Header from '../Header';
import SizeIndicator from '../SizeIndicator';
import MiddleColumn from '../MiddleColumn';
import MainContent from '../MainContent';
import './App.css';

export default () => (
    <Fragment>
        <Header />
        <ActionBar />
        <FireplaceColumns>
            <Skyscraper />
            <div>
                <SuperBanner />
                <MiddleColumn>
                    <MainContent />
                </MiddleColumn>
            </div>
            <Skyscraper />
        </FireplaceColumns>
        <SizeIndicator />
    </Fragment>
);
