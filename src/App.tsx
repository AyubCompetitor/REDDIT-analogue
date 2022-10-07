import React from "react";
import { hot } from 'react-hot-loader/root';

import './main.global.css';

import { Layout } from "./shared/Layout/index";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent);