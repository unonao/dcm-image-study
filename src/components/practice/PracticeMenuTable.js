import React from 'react';
import { Blank } from '../parts/blankspace';
import { translation } from '../parts/Translation';
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

export class PracticeMenuTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const filterHead = this.props.Head;
        const filterThorax = this.props.Thorax;
        const filterAbdomen = this.props.Abdomen;
        const filterPelvis = this.props.Pelvis;
        const filterMale = this.props.Male;
        const filterFemale = this.props.Female;

        const flitercite = []
        const filtersex = []

        const rows = [];
        const key = {};
        this.props.products.forEach((product) => {
            key[product.practiceId] = 0
        })

        if (filterHead === true) {
            const part = translation('Head')
            flitercite.push(part)
        }
        if (filterThorax === true) {
            const part = translation('Thorax')
            flitercite.push(part)
        }
        if (filterAbdomen === true) {
            const part = translation('Abdomen')
            flitercite.push(part)
        }
        if (filterPelvis === true) {
            const part = translation('Pelvis')
            flitercite.push(part)
        }
        if (filterMale === true) {
            filtersex.push('男性')
        }
        if (filterFemale === true) {
            filtersex.push('女性')
        }

        this.props.products.forEach((product) => {
            const disease = product.disease.join(',');
            if (filterText === '') {
                if (flitercite.length === 0) {
                    if (key[product.practiceId] === 0) {
                        if (filtersex.length === 0) {
                            return;
                        } else {
                            filtersex.forEach((sex) => {
                                if (product.patientSex.indexOf(sex) !== -1) {
                                    rows.push(
                                        <PracticeMenuRow
                                            product={product}
                                            key={product.practiceId} />
                                    )
                                    key[product.practiceId] += 1
                                }
                            })
                        }
                    }
                } else {
                    flitercite.forEach((part) => {
                        if (product.site.indexOf(part) !== -1) {
                            if (key[product.practiceId] === 0) {
                                if (filtersex.length === 0) {
                                    rows.push(
                                        <PracticeMenuRow
                                            product={product}
                                            key={product.practiceId} />
                                    )
                                    key[product.practiceId] += 1
                                } else {
                                    filtersex.forEach((sex) => {
                                        if (product.patientSex.indexOf(sex) !== -1) {
                                            rows.push(
                                                <PracticeMenuRow
                                                    product={product}
                                                    key={product.practiceId} />
                                            )
                                            key[product.practiceId] += 1
                                        }
                                    })
                                }
                            } else {
                                return;
                            }
                        }
                    })
                }
            } else {
                if (disease.indexOf(filterText) === -1) {
                    return;
                } else {
                    if (flitercite.length === 0) {
                        if (key[product.practiceId] === 0) {
                            if (filtersex.length === 0) {
                                rows.push(
                                    <PracticeMenuRow
                                        product={product}
                                        key={product.practiceId} />
                                )
                                key[product.practiceId] += 1
                            } else {
                                filtersex.forEach((sex) => {
                                    if (product.patientSex.indexOf(sex) !== -1) {
                                        rows.push(
                                            <PracticeMenuRow
                                                product={product}
                                                key={product.practiceId} />
                                        )
                                        key[product.practiceId] += 1
                                    }
                                })
                            }
                        } else {
                            return;
                        }
                    } else {
                        flitercite.forEach((part) => {
                            if (product.site.indexOf(part) !== -1) {
                                if (key[product.practiceId] === 0) {
                                    if (filtersex.length === 0) {
                                        rows.push(
                                            <PracticeMenuRow
                                                product={product}
                                                key={product.practiceId} />
                                        )
                                        key[product.practiceId] += 1
                                    } else {
                                        filtersex.forEach((sex) => {
                                            if (product.patientSex.indexOf(sex) !== -1) {
                                                rows.push(
                                                    <PracticeMenuRow
                                                        product={product}
                                                        key={product.practiceId} />
                                                )
                                                key[product.practiceId] += 1
                                            }
                                        })
                                    }
                                } else {
                                    return;
                                }
                            }

                        })
                    }
                }
            }
        })
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
                <div>{console.log(filtersex)}</div>
            </div >
        );
    }
}