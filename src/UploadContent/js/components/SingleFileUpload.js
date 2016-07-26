import React, { Component, PropTypes } from 'react';
import ReactTabs from 'react-tabs';
import { reduxForm } from 'redux-form'
export const fields = [ 'file', 'name']
import Accordion from './common/Accordion';
import AccordionSection from './common/AccordionSection';
import Label from'./common/Label';
import TextBox from './common/TextBox';
import ChooseFile from './common/ChooseFile';
import { Link, browserHistory } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PE_tooltip from './common/pe-tooltip';


const validate = values => {
const MaxFileSize = 1024 * 1024 * 10;
const AllowFileFormats = ['jpg','jpeg','png','tiff','mp4',
                            'mp3','doc','gif','docx','xls','xlsx',
                            'ppt','pptx','txt','pdf','csv','odg',
                            'odp','odt','ods','ebk','wdgt'];
  let FileName = '';
  let SplitString = '';
  let FileExtension = '';
  const errors = {}
  if (!values.file) {
    errors.file = 'Error: Required Field'
  }else if(values.file.length===0){
    errors.file = 'Error: Required Field'
  }else{
    FileName = values.file[0].name;
    SplitString = FileName.split('.');
    FileExtension = SplitString[1];
    if(AllowFileFormats.indexOf(FileExtension)===-1){
      errors.file = 'Error:Wrong file type'
    }
    else if(values.file[0].size>MaxFileSize){
      errors.file = 'Error: Filesize should be less than 10 MB'
    }
  }
  if (!values.name) {
    errors.name = 'Error: Required Field'
  }
  return errors
}

class SingleFileUpload extends Component {

  constructor(props) {
    super(props);
    this.onSave = props.onSave;
  }
  
   _tooltipClick(e){
        e.preventDefault()
    }

  render() {
    const {asyncValidating, fields: { file, name}, handleSubmit} = this.props
    return (
        <div>
         <p className="pe-uploadfor--text">Uploading to the asset library for: <span className="pe-uploadfor--title">The Humanities: Culture, Continuity and Change, Volume II</span></p>
         <button className="pe-btn">Change</button>
          <div className="pe-jobstatus">
          <Link to="CheckJobStatus">Check Job Statuses</Link>
          </div>
         <Accordion selected="2">
            <AccordionSection title="Batch File Upload" id="1">
                 Under construction
            </AccordionSection>
            <AccordionSection title="Single File Upload" id="2">
             <div className="pe-singleupload--wrapper">
                  <form onSubmit={handleSubmit(this.onSave)}>
                     <div className="pe-input">
                     <Label for="name" text="Choose a file to upload"/>
                      <ChooseFile choosefileclass="pe-choose-file" name="file" value={file} />
                        {file.touched && file.error &&
                        <ul className="pe-input pe-error-text">
                           <li>{file.error}</li>
                        </ul>
                        }
                     </div>
                    <div className="col-full">
                            <PE_tooltip position="right" content="jpg, jpeg, gif, png, tiff, mp4, mp3, doc, docx, xls, xlsx, ppt, pptx, txt, pdf, csv, odg, odp, odt, ods, edk, wdgt">
                                <a href="#" onClick={this._tooltipClick.bind(this)}>file formats</a>
                            </PE_tooltip>
                        </div>
                     <div className="pe-input text">
                        <Label for="name" text="Name (required)"/>
                        <TextBox className="form-control" maxLength="60" placeholder="Name" value={name}/>
                        {name.touched && name.error &&
                        <ul className="pe-input pe-error-text">
                           <li>{name.error}</li>
                        </ul>
                        }
                     </div>
                     <div className="pe-buttonbar pe-clear">
                        <div className="pe-pull-right">
                           <button className="pe-btn pe-btn--primary" type="submit">Save and Upload</button>
                        </div>
                     </div>
                  </form>
               </div>
            </AccordionSection>
            </Accordion>
        </div>
    )
  }
}

SingleFileUpload.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'synchronousValidation',
  fields,
  validate
})(SingleFileUpload)