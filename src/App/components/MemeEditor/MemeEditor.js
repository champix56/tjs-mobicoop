import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';

const MemeEditor = () => {
  const [state, setstate] = useState({ text: { x: 1200, y: 520, value: 'DEMAT BREIZHOUZ' }, ressourceId: 0 });
  return (
    <div className={styles.MemeEditor}>
      <div className={styles.titre}>
        MemeEditor
      <hr />
        <form>
          ressource<br />
          <select value={state.ressourceId} onChange={function(evt){
            setstate({...state,ressourceId:evt.target.value});
          }}>
            <option value="1">img1.jpg</option>
            <option value="0">img0.jpg</option>
            <option value="2">img2.jpg</option>
          </select>
          <hr />
          <div>
            <div className="col-md-6">
              x<br /><input type="number" min="0" step="1" value={state.text.x}  onChange={function (evt) {
              setstate({ ...state, text: { ...state.text, x: evt.target.value  } })
            }}  />
            </div>
            <div className="col-md-6">y<br /><input type="number" min="0" step="1" value={state.text.y} onChange={function (evt) {
              setstate({ ...state, text: { ...state.text, y: evt.target.value  } })
            }}  /></div>
          </div>
          <div style={{ textAlign: 'center' }}>Text :<br />
            <input type="text" placeholder="saisir le texte du meme" value={state.text.value} onChange={function (evt) {
              console.log(evt.target);
              setstate({ ...state, text: { ...state.text, value: evt.target.value  } })
            }} />
          </div>
          <input type="reset" className="btn btn-warning" value="Reset" />
          <input type="submit" className="btn btn-info" value="Ok" />
        </form>
      </div>
      {JSON.stringify(state)}
    </div>
  );
}
// MemeEditor.propTypes = {};

// MemeEditor.defaultProps = {};

export default MemeEditor;
