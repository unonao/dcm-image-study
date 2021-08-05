import React from 'react';
import { Blank } from '../parts/blankspace';
import { practice } from './PracticeData';
import './PracticeMenu.css'


class PracticeMenuRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <tr className='PracticeMenu_box'>
                <td>{product.practiceId}</td>
                <td>{product.patientAge}</td>
                <td>{product.patientSex}</td>
                <td>{product.site}</td>
                <td>{product.disease[0]}</td>
                <td>{product.findings[0]}</td>
            </tr>
        );
    }
}

class PracticeMenuTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        this.props.products.forEach((product) => {
            if (product.site.indexOf(filterText) === -1) {
                return console.log(product.site.indexOf(filterText))
            } else if (product.site.indexOf(filterText) >= 0) {
                console.log(product.patientInfo.indexOf(filterText))
                rows.push(
                    <PracticeMenuRow
                        product={product}
                        key={product.name} />
                );
            }
            if (inStockOnly && !product.site) {
                return;
            }

        });


        return (
            <div>
                <table className='PracticeMenu'>
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>ID</th>
                            <th style={{ width: '5%' }}>年代</th>
                            <th style={{ width: '5%' }}>性別</th>
                            <th style={{ width: '5%' }}>部位</th>
                            <th style={{ width: '30%' }}>疾患</th>
                            <th style={{ width: '45%' }}>所見</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                <div>
                    {(rows.length === 0) ? <div>{Blank('No rows to show')}</div> :
                        <div></div>}
                </div>
            </div>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export class FilterablePracticeMenuTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <PracticeMenuTable
                    products={practice}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}