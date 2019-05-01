import React from "react";
import PropTypes from "prop-types";

import FormPropTypesField from "../../form/propTypes/Field";
import Form from "../../form/Form";
import Modal from "../Modal";
import ModalConfirm from "../confirm/Confirm";

class ModalForm extends React.Component {
   static propTypes = {
       title: PropTypes.string.isRequired,
       description: PropTypes.string,
       fields: PropTypes.arrayOf( FormPropTypesField ).isRequired,
       errors: PropTypes.shape(),
       submit: PropTypes.func.isRequired,
   };

   static defaultProps = {
       description: null,
       errors: {},
   };

   state ={
       isConfirmModalOpen: false,
       isFormModalOpen: false,
       isFormChanged: false,
   }

   setIsFormChanged = value => this.setState( { isFormChanged: value } );

   setIsConfirmModalOpen = value => this.setState( { isConfirmModalOpen: value } );

   setIsFormModalOpen = ( value ) => {
       const { isFormChanged } = this.state;

       if ( isFormChanged ) {
           this.setState( {
               isConfirmModalOpen: true,
           } );
       } else {
           this.setState( {
               isFormModalOpen: value,
           } );
       }
   }

   onConfirm = () => this.setState( { isConfirmModalOpen: false, isFormModalOpen: false, isFormChanged: false } );

   onSubmit = ( values ) => {
       const { submit } = this.props;
       submit( values );
       this.setState( {
           isConfirmModalOpen: false,
           isFormModalOpen: false,
           isFormChanged: false,
       } );
   }

   render() {
       const {
           title,
           description,
           fields,
           errors,
       } = this.props;

       const {
           isConfirmModalOpen,
           isFormModalOpen,
       } = this.state;

       return (
           <React.Fragment>
               <button type="button" className="button is-primary" onClick={ () => this.setIsFormModalOpen( !isFormModalOpen ) }>{ title }</button>
               <Modal
                   title={ title }
                   description={ description }
                   body={ (
                       <Form
                           fields={ fields }
                           errors={ errors }
                           submit={ this.onSubmit }
                           setIsChanged={ this.setIsFormChanged }
                           hasSubmitButton
                       />
                   ) }
                   hasCancelButton={ false }
                   isOpen={ isFormModalOpen }
                   setIsOpen={ this.setIsFormModalOpen }
               />
               <ModalConfirm
                   title="Are you sure?"
                   description="The form contains data that is not saved yet."
                   isOpen={ isConfirmModalOpen }
                   setIsOpen={ this.setIsConfirmModalOpen }
                   onConfirm={ this.onConfirm }
               />
           </React.Fragment>
       );
   }
}

export default ModalForm;
