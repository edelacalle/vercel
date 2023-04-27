import axios from 'axios';
// import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from '../lib/constants';

const HYGRAPH_URL = 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clgtlxv7a1qvq01t9fj1lg02i/master';
const HYGRAPH_PERMANENTAUTH_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODIzNTIwNzYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xndGx4djdhMXF2cTAxdDlmajFsZzAyaS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWY1NzdlNjUtZTI5NS00ZTVmLWE4YjQtMGY0ZDNhZTlhMjJhIiwianRpIjoiY2xndjB6bTg2MGNoaTAxdW05dW5yN2RwcCJ9.QAE0MiNrLfzV2FZ23S1F8qw39FAsrMFSBxOdWGOjYIwevHF1rGrw8MP-4roGHO0FJypXbg-FRxw60_p027h84dgDD-1Dyk0zf44ym5kP4AgKMiEavSawpfUB7NzchCbqQvIp3tPYFxgmmBEWJpu0MqgDBjuUKwQq6hKiNJ7l7K6JJ9ujsQw-bpwnpSV7K2bVpq93JHy5eef8Kc8wBTLnl2JhQ7wmmPf8G8-DljJ0zD3pGfDYzV2WyMemPNIwIL34S1G92YLXManAsYqFwwjnDVbBGdBgolm5scCUHEos118AHL5e7WyJCHECMfH9M9ANtNfMCTLK086Qw14MLQonZo6lRhBr19Nie35nAPTXA9htmAM65cUovrPfINHVQ-Z2kyMTZGzNKFfDXt600UQsSlhd2j60f_czi3xOAIC-0EUjsC1rSG1H4G1f6AclblVgV7aBhbsjiMHm4b2kFfftillTMaw5_HDqFzJnZg3RWbiAcMKDlLgRyPSYQQe9IJ-JrAthnNxOQgIZ-2efNr9GwaQJNGeh604Q17iTIK-Q2-yEt-avGwYIVU3VoZ5m5gWBpOxaAjdEB2pZsB8Ow8xKQjEWbMCThbmOcUpq2GUvLot97SEw5Ii6THiC1SyJCI4f7UYudAArbBfxMbFrVf7t_StItMRA0fJDrSsePBAmaPc';

var oData= {"en":{}};


  const getSlugsbyAxiosAPICall = async () => {
    try {
  
      const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
      };
  
        const requestBody = {
        query: `query MyQuery {
            posts:demoModels {
              slug
            }
          }
        `
      };
  
      const options = {
        method: 'POST',
        url: HYGRAPH_URL,
        headers,
        data: requestBody
      };
      const res = await axios(options);
      var oRet = []
      res.data.data.posts.map((e)=>oRet.push(e.slug)); 
      return oRet;    
    }
    catch (err) {
      console.log('ERROR DURING AXIOS REQUEST', err);
    }
    finally {
      
    }
  };

  
const getPostsyAxiosAPICall = async (locale) => {
  try {
    const headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
    };

    const requestBody = {
      query: `query MyQuery {
        posts:demoModels(locales: %%locale%%) {
          slug
          title
          subtitle
          fecha
        }
      }`
    };

    requestBody.query = requestBody.query.replace("%%locale%%",locale);

    const options = {
      method: 'POST',
      url: HYGRAPH_URL,
      headers,
      data: requestBody
    };
    const res = await axios(options);
    //console.log("borrame", res.data.data.posts)
    return res.data;    
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', err);
  }
  finally {
    
  }
};

const getPostAxiosAPICall = async (id) => {
    try {
  
      const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
      };
  
        const requestBody = {
        query: `query MyQuery($locales: [Locale!] = [en, es]) {
            post:demoModel(where: {slug: "%%slug%%"}) {
              slug
              title
              localizations(locales: $locales) {
                content {
                  html
                }
                slug
                locale
                title
                subtitle
              }
              content {
                html
              }
              subtitle
            }
          }`
      };

      requestBody.query = requestBody.query.replace('%%slug%%', id); 
    
  
      const options = {
        method: 'POST',
        url: HYGRAPH_URL,
        headers,
        data: requestBody
      };
      const res = await axios(options);
      var oRet = {
        id:id,
        "en":{
            id: id,
            title:res.data.data.post.title,
            subtitle:res.data.data.post.subtitle,
            content:res.data.data.post.content.html
        },
        "es":{
            id: id,
            title:res.data.data.post.localizations[0].title,
            subtitle:res.data.data.post.localizations[0].subtitle,
            content: res.data.data.post.localizations[0].content.html
        }
      }
      return oRet;    
      // setUserDetails(response?.data?.data?.nextUser ?? {});
    }
    catch (err) {
      console.log('ERROR DURING AXIOS REQUEST', err);
    }
    finally {
      
    }
  };


export {getPostsyAxiosAPICall , getPostAxiosAPICall  , getSlugsbyAxiosAPICall }