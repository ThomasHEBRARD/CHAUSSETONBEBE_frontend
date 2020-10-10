import React, { createRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import usePortal from '../../helpers/userPortal';

interface AppModalProps {
    isOpen: boolean;
    closeModal: () => void;
    closeOnSpace?: boolean;
    children: JSX.Element;
}

const StyledModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 110;
`;

const StyledModalBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
    opacity: 0.8;
`;

const Modal = (props: AppModalProps) => {
    const { isOpen, closeModal, children, closeOnSpace } = props;

    const target = usePortal('modal');
    const popupRef = createRef<HTMLDivElement>();

    const handleKeyDown: React.KeyboardEventHandler = (e) => {
        if (e.key === 'Escape' || (closeOnSpace && e.key === ' ')) {
            e.stopPropagation();
            closeModal();
        }
    };

    useEffect(() => {
        if (popupRef.current) {
            popupRef.current.focus();
        }
    }, [popupRef]);

    return createPortal(
        isOpen ? (
            <StyledModalWrapper tabIndex={-1} onKeyDown={handleKeyDown} ref={popupRef}>
                {children}
                <StyledModalBackground onClick={() => closeModal()} />
            </StyledModalWrapper>
        ) : (
            <></>
        ),
        target
    );
};

export default Modal;
