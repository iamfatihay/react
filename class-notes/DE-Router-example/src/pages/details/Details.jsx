import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const Details = () => {
  const { namee } = useParams();
  const navigate = useNavigate()
  const [ülke, setUlke] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${namee}`).then((res) => res.json()).then((data) => setUlke(data))
  }, [namee]);

  const handleMapClick = (mapUrl) => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="container text-center d-flex justify-content-center mt-4">
      {ülke.map(a => {
        const { name, capital, currencies, languages, region, population, maps, translations, flags } = a;
        if (name.common === namee) {
          return (
            <div>
              <Container className="text-center mt-4 p-4 " style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.6)" }}>
                <Card style={{ width: "30rem" }}>
                  <Card.Img variant="top" src={flags.png} />
                  <Card.Body>
                    <h1 className='fw-bold'>{name.common}</h1>
                    <Card.Text >Turkish translation : <span className='fw-bold'>{translations.tur.official}</span> </Card.Text>
                    <Card.Text>Population : <span className='fw-bold'>{population}</span> </Card.Text>
                    <Card.Text>
                      Currencies:
                      {currencies && Object.values(currencies).length > 0
                        ? Object.values(currencies)
                          .map((curr) => curr.name)
                          .join(", ")
                          .split(":")
                          .map((el, i) =>
                            i === 0 ? <span key={i} className="fw-bold">{` ${el}`}</span> : `: ${el}`
                          )
                        : "N/A"}
                    </Card.Text>
                    {capital && capital.length > 0 && (
                      <Card.Text>Capital: <span className='fw-bold'>{capital[0]}</span> </Card.Text>
                    )}
                    <Card.Text>Region: <span className='fw-bold'>{region}</span> </Card.Text>
                    <Card.Text>
                      {languages && Object.values(languages).length > 0 ? (
                        <>
                          Languages:
                          {Object.values(languages).map((language, index) => (
                            <span key={language}>
                              {index === 0 ? (
                                ` ${language.substring(0, language.indexOf(":") + 1)}`
                              ) : (
                                `, ${language.substring(0, language.indexOf(":") + 1)}`
                              )}
                              <strong>{language.substring(language.indexOf(":") + 1)}</strong>
                            </span>
                          ))}
                        </>
                      ) : (
                        "Languages: N/A"
                      )}
                    </Card.Text>
                    <button className='btn btn-warning mb-1' onClick={() => handleMapClick(maps.googleMaps)}>View on Google Maps</button><br />
                    <button
                  className="btn btn-warning"
                  onClick={() => navigate("/")}
                >
                  HOME
                </button>
                  </Card.Body>
                </Card>
              </Container>
              <div className='p-3 '>
                
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
export default Details;