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
              <Container className="text-center mt-4 p-4 ">
                <Card style={{ width: "30rem" }}>
                  <Card.Img variant="top" src={flags.png} />
                  <Card.Body>
                    <Card.Title className='fw-bold'>{name.common}</Card.Title>
                    <Card.Text>Turkish translation : {translations.tur.official}</Card.Text>
                    <Card.Text>Population : {population}</Card.Text>
                    <Card.Text>
                      {currencies && Object.values(currencies).length > 0 ? (
                        `Currencies: ${Object.values(currencies)
                          .map((curr) => curr.name)
                          .join(', ')}`
                      ) : (
                        'Currencies: N/A'
                      )}
                    </Card.Text>
                    {capital && capital.length > 0 && (
                      <Card.Text>Capital: {capital[0]}</Card.Text>
                    )}
                    <Card.Text>Region: {region}</Card.Text>
                    <Card.Text>
                      {languages && Object.values(languages).length > 0 ? (
                        `Languages: ${Object.values(languages).join(', ')}`
                      ) : (
                        'Languages: N/A'
                      )}
                    </Card.Text>
                    <button className='btn btn-warning' onClick={() => handleMapClick(maps.googleMaps)}>View on Google Maps</button>
                  </Card.Body>
                </Card>
              </Container>
              <div className='p-3 '>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/")}
                >
                  HOME
                </button>
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