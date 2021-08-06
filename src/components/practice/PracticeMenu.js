import React from 'react';
import { practice } from './PracticeData';
import { PracticeMenuTable } from './PracticeMenuTable';



export class FilterablePracticeMenuTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            Head: false,
            Thorax: false,
            Abdomen: false,
            Pelvis: false,
            Male: false,
            Female: false,
            twenty: false,
            thirty: false,
            fourty: false,
            fifty: false,
            sixty: false,
            seventy: false,
            eighty: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterCheckBoxChange = this.handleFilterCheckBoxChange.bind(this);
    }
    handleFilterTextChange(event) {
        this.setState({ filterText: event.target.value });
    }

    handleFilterCheckBoxChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: target.checked });
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <div>
                        <label>
                            <input
                                name='Head'
                                type="checkbox"
                                checked={this.state.Head}
                                onChange={this.handleFilterCheckBoxChange}
                            />
                            頭部
                        </label>
                        <label>
                            <input
                                name='Thorax'
                                type="checkbox"
                                checked={this.state.Thorax}
                                onChange={this.handleFilterCheckBoxChange}
                            />
                            胸部
                        </label>
                        <label>
                            <input
                                name='Abdomen'
                                type="checkbox"
                                checked={this.state.Abdomen}
                                onChange={this.handleFilterCheckBoxChange}
                            />
                            腹部
                        </label>
                        <label>
                            <input
                                name='Pelvis'
                                type="checkbox"
                                checked={this.state.Pelvis}
                                onChange={this.handleFilterCheckBoxChange}
                            />
                            骨盤部
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                name='Male'
                                type="checkbox"
                                checked={this.state.Male}
                                onChange={this.handleFilterCheckBoxChange}
                            />
                            男性
                        </label>
                        <label>
                            <input
                                name='Female'
                                type="checkbox"
                                checked={this.state.Female}
                                onChange={this.handleFilterCheckBoxChange}
                            />
                            女性
                        </label>
                    </div>
                </form>
                <PracticeMenuTable
                    products={practice}
                    filterText={this.state.filterText}
                    Head={this.state.Head}
                    Thorax={this.state.Thorax}
                    Abdomen={this.state.Abdomen}
                    Pelvis={this.state.Pelvis}
                    Male={this.state.Male}
                    Female={this.state.Female}
                />
            </div>
        );
    }
}