import React, { Component, useState, useMemo } from 'react';
import { practice } from './PracticeData';
import './PracticeMenu.css'

//images
import headimg from '../images/Head.jpg'
import thoraximg from '../images/Thorax.jpg'
import abdomenimg from '../images/Abdomen.jpg'
import pelvisimg from '../images/Pelvis.jpg'

export function PracticeMenu() {
    return (
        <div>
            <div className='explanation'>
                <table>
                    <tbody>
                        <tr>
                            <th>　　</th>
                            <th>部位</th>
                            <th>Level A</th>
                            <th>Level B</th>
                            <th>Level C</th>
                            <th>Level D</th>
                            <th>Level E</th>
                        </tr>
                        <tr>
                            <th className="icon bird"><img className="exp_row_img" src={headimg} alt='頭'></img></th>
                            <th>頭部</th>
                            <td onClick={() => { window.open('/grid/705601001', '_blank') }}>705601001</td>
                            <td onClick={() => { window.open('/grid/701401002', '_blank') }}>701401002</td>
                            <td onClick={() => { window.open('/grid/707712001', '_blank') }}>707712001</td>
                            <td onClick={() => { window.open('/grid/700800001', '_blank') }}>700800001</td>
                            <td onClick={() => { window.open('/grid/707711002', '_blank') }}>707711002</td>
                        </tr>
                        <tr>
                            <th className="icon whale"><img className="exp_row_img" src={thoraximg} alt='胸'></img></th>
                            <th>胸部</th>
                            <td>0400601001</td>
                            <td>0403911001</td>
                            <td>0403501001</td>
                            <td>0400112001</td>
                            <td>0407801001</td>
                        </tr>
                        <tr>
                            <th className="icon crab"><img className="exp_row_img" src={abdomenimg} alt='腹'></img></th>
                            <th>腹部</th>
                            <td>　　</td>
                            <td>　　</td>
                            <td>　　</td>
                            <td>　　</td>
                            <td>　　</td>
                        </tr>
                        <tr>
                            <th className="icon whale"><img className="exp_row_img" src={pelvisimg} alt='胸'></img></th>
                            <th>骨盤部</th>
                            <td>0901012003</td>
                            <td>0901101001</td>
                            <td>0901702001</td>
                            <td>0808201002</td>
                            <td>0807912001</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='practice_sample'>
                <p><a href="/grid/viewer" target="_blank">サンプル</a></p>
            </div>
        </div>
    );
}



class PracticeMenuRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <tr className='PracticeMenu_box'>
                <td>{product.practiceId}</td>
                <td>{product.patientAge}</td>
                <td>{product.patientSex}</td>
                <td>{product.site}</td>
                <td>{product.disease}</td>
                <td>{product.findings}</td>
            </tr>
        );
    }
}

class PracticeMenuTable extends React.Component {
    render() {
        const rows = [];

        this.props.products.forEach((product) => {
            rows.push(
                <PracticeMenuRow
                    product={product}
                    key={product.name} />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>年代</th>
                        <th>性別</th>
                        <th>部位</th>
                        <th>疾患</th>
                        <th>所見</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
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