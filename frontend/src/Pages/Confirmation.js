import React ,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'; // Upload icon
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'; // Success icon
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'; // Delete icon
import axios from 'axios';
import BaseURL from '../components/BaseURL';

function Confirmation() {
    const [uploads, setUploads] = useState({ file1: null, file2: null, file3: null });
    const [hovered, setHovered] = useState(null);

    const triggerInput = (fileKey) => {
        document.getElementById(fileKey).click();
    };

    const renderIcon = (fileKey) => {
        if (hovered === fileKey && uploads[fileKey]) {
            return <CancelOutlinedIcon />;
        } else if (uploads[fileKey]) {
            return <CheckCircleOutlineOutlinedIcon />;
        } else {
            return <FileUploadOutlinedIcon />;
        }
    };

    const renderText = (fileKey) => {
        if (hovered === fileKey && uploads[fileKey]) {
            return 'DELETE';
        } else if (uploads[fileKey]) {
            return 'File Uploaded';
        } else {
            return 'UPLOAD';
        }
    };

    /*******************************Back End*****************************************/
    const history = useNavigate();
    const [formData , setFormData] = useState({
        id: '',
        token: '',
        design1: null,
        design2: null,
        design3: null,
    })

        // Extract id and token from URL
        useEffect(() => {
            const searchParams = new URLSearchParams(window.location.search);
            setFormData(formData => ({
                ...formData,
                id: searchParams.get('di') || '',
                token: searchParams.get('c') || '',
            }));
        }, []);

        useEffect(() => {
            const designerId = {id: formData.id};
            const fetchAddresses = async () => {
              try {
                const response = await axios.post(`${BaseURL}/areesiaAPI/PageRendering/Designers/ConfirmationRender.php`, designerId);
                console.log(response.data.message);
        
              } catch (error) {
                console.error('Error fetching addresses:', error);
              }
            };
        
            fetchAddresses();
          }, [formData.id]);

        const handleFileChange = (event, fileKey) => {
            const file = event.target.files[0];
            setUploads({ ...uploads, [fileKey]: file });

            // Update formData with the file
            setFormData({ ...formData, [fileKey.replace('file', 'design')]: file });
        };
    
        const handleDelete = (fileKey) => {
            setUploads({ ...uploads, [fileKey]: null });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            let data = new FormData();
            data.append('id', formData.id);
            data.append('token', formData.token);
            if (formData.design1) data.append('design1', formData.design1);
            if (formData.design2) data.append('design2', formData.design2);
            if (formData.design3) data.append('design3', formData.design3);

            try{
                const response = await axios.post(`${BaseURL}/areesiaAPI/UploadConfirmationFiles.php`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }        
                })
                console.log(response.data.message)
                if(response.data.status === 1){
                    history("/");
                } 
            } catch (error){
                console.error(error)
            }

        }

  return (
    <div>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <div className='Left_Item'>
                    <h1>Request a review</h1>
                    <p>We need to confirm your ability of designing.</p>
                    <form onSubmit={handleSubmit} className='Confirmation_Container'>
                        {['file1', 'file2', 'file3'].map(fileKey => (
                            <div
                                key={fileKey}
                                className='Upload'
                                onClick={() => uploads[fileKey] ? handleDelete(fileKey) : triggerInput(fileKey)}
                                onMouseEnter={() => setHovered(fileKey)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <input
                                    type="file"
                                    id={fileKey}
                                    style={{ display: 'none' }}
                                    accept=".pdf, .png, .jpg, .jpeg"
                                    onChange={(e) => handleFileChange(e, fileKey)}
                                />
                                {renderIcon(fileKey)}
                                <p>{renderText(fileKey)}</p>
                            </div>
                        ))}
                        <button type='submit' className='primaryButton'>Request Review</button>
                        <p>We're reviewing your designs to ensure they meet our standards. Your creativity is valued, and we'll let you know once your designs qualify to join our platform.
                        <br/>Thank you for sharing your artistry with us!</p>
                    </form>
                </div>
            </Grid>
            <Grid item xs={0} md={6}>
                <div className='Right_Item'>
                  <div className='signup_welcoming'>
                    <p className='message'><span className='coma'>“</span><br/>let your designs speak louder than words.</p>
                  </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Confirmation