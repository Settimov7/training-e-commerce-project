import React, {Component} from "react";

import {CollectionPreview} from "../../components/collection-preview/collection-preview.component";

import {SHOP_DATA} from "./shop-data";

type Props = {}

//TODO: Вынести в типы
type State = {
    collections: ReadonlyArray<{
        id: number,
        title: string,
        routeName: string,
        items: ReadonlyArray<{
            id: number,
            name: string,
            imageUrl: string,
            price: number
        }>
    }>,
}

export class ShopPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        const {collections} = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({id, title, items}) => (
                        <CollectionPreview key={id} title={title} items={items}/>
                    ))
                }
            </div>
        );
    }
}
