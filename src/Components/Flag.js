import React from 'react'
import Australia from "../Assets/aus.png"
import Pakistan from "../Assets/pak.png"
import America from "../Assets/ame.png"
import UAE from "../Assets/uae.png"
const Flag = () => {
  return (
    <>
    <div className="row flags">
          <div className="col-md-3 col-sm-4  coll">
            <img src={America} className="coll" />
            <h4 className="flagT">United State</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4  coll">
            <img src={Australia} className="coll" />
            <h4 className="flagT">Australia</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4  coll">
            <img src={Pakistan} className="coll" />
            <h4 className="flagT">Pakistan</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4 coll">
            <img src={UAE} className="coll" />
            <h4 className="flagT">UAE</h4>
            <p className="para2">Comming Soon</p>
          </div>
        </div>
    </>
  )
}

export default Flag