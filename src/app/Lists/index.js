import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "../../store/Lists/actionCreators";

class MainListContainer extends Component {
    componentDidMount() {
        const { getLists } = this.props;
        getLists();
    }
    render() {
        const { lists } = this.props;
        return (
            <div>
                <pre>{JSON.stringify(lists)}</pre>
            </div>
        );
    }
}

const mapStateToProps = ({ mainLists: { lists } }) => ({
    lists,
});

const mapDispatchToProps = {
    getLists: actionCreators.getLists.create,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer);
