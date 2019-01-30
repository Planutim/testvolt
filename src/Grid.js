<Container>
<Row noGutters>
  <Col>1 of 2</Col>
  <Col>2 of 2</Col>
</Row>
<Row>
  <Col>1 of 3</Col>
  <Col>2 of 3</Col>
  <Col>3 of 3</Col>
</Row>
<Row>
  <Col>1 of 3</Col>
  <Col xs={6}>2 of 3(wider)</Col>
  <Col>3 of 3</Col>
</Row>
<Row>
  <Col>1 of 3</Col>
  <Col xs={1}>2 of 3(smaller)</Col>
  <Col>3 of 3</Col>
</Row>
<Row className='justify-content-md-center'>
  <Col xs lg="2">1 of 3</Col>
  <Col md="auto">Variable width content</Col>
  <Col xs lg="2">3 of 3</Col>
</Row>
<Row>
  <Col sm={8}>sm=8</Col>
  <Col sm={4}>sm=4</Col>
</Row>
<Row>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
</Row>
<Row>
  <Col xs={12} md={8}>xs=12 md=8</Col>
  <Col xs={6} md={4}>xs=6 md=4</Col>
</Row>
<Row>
  <Col xs={6} md={4}>xs=6 md=4</Col>
  <Col xs={6} md={4}>xs=6 md=4</Col>
  <Col xs={6} md={4}>xs=6 md=4</Col>
</Row>
<Row>
  <Col xs>First but unordered</Col>
  <Col xs={{order: 12}}>Second but last</Col>
  <Col xs={{order: 1}}>Third but second</Col>
</Row>
<Row>
  <Col md={4}>md=4</Col>
  <Col md={{span:7, offset: 1}}>test</Col>
</Row>
<Row>
  <Col md={{span: 3, offset: 3}}>span=3 offset=3</Col>
  <Col md={{span:3, offset: 3}}>same</Col>
</Row>
<Row>
  <Col md={{span: 6, offset: 4}}>test</Col>
</Row>
</Container>
