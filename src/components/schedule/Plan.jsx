import React, { Component } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions';
import PlanForm from './Form';

const mapStateToProps = state => {
    return {
        modalIsOpen: state.isModalOpen,
    };
}

Modal.setAppElement('#root');

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal()),
    }
}

class Plan extends Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal = () => {
        this.props.toggleModal();
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    contentLabel="I'm a modal">
                    <div>Hello</div>
                    <button onClick={this.closeModal}>Close Me</button>
                    <PlanForm />
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);