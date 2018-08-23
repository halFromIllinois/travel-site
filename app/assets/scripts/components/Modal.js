import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalBtn = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalBtn = $(".modal__close")
        this.events();
    }

    events(){
        //open modal click
        this.openModalBtn.click(this.openModal.bind(this));

        //close modal click
        this.closeModalBtn.click(this.closeModal.bind(this));

        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if (e.keyCode == 27){
            this.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--visible")
    }
}

export default Modal;
