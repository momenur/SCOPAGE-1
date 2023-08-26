// Import for modal
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
// Custom SCC
import './modal.css'
const Modal = ({ modal, setModal }) => {
    
    return (
        <div className=''>
            <PureModal
                header="Please Upload a file"

                isOpen={modal}
                closeButton="X"
                closeButtonPosition="bottom"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
            >
                <div>
                    <form>
                        <div className='flex flex-col gap-10 px-4'>
                            <input id='fileInput' name='selectedFile' className='px-10 py-4 bg-yellow-500' type="file" multiple/>
                            <input className='px-6 py-4 text-xl font-semibold text-white bg-yellow-400' type="submit" value="Upload Your Files" />
                        </div>
                    </form>
                </div>
            </PureModal>
        </div>
    );
};

export default Modal;


