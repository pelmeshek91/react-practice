import { Component } from 'react';
import s from './Modal.module.css';

export class Modal extends Component {
  closeByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }
  render() {
    const {
      image: { src, alt },
      closeModal,
    } = this.props;
    return (
      <div className={s.backdrop} onClick={this.closeByBackdrop}>
        <div className={s.modal}>
          <img
            src={`https://image.tmdb.org/t/p/w500${src}
`}
            alt={alt}
          />
          <button type="button" className={s.closeBtn} onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
