const getHome = (req, res) => {
    res.send("Home")
}

const getTest = (req, res) => {
    res.send("test")
}

const getSysInfo = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({"node":"edge-" + Math.random().toString(36).substring(7)})
}

const getBackendViolationPerApi = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json( {"backendProtocolError":[{"totalCount":getRandomInt(100)},{"apiName":"/browse","count":getRandomInt(100)},{"apiName":"/checkout","count":getRandomInt(100)}],"backendRoutingError":[{"totalCount":getRandomInt(100)}],"backendContentError":[{"totalCount":getRandomInt(100)}],"backendAuthenticationError":[{"totalCount":getRandomInt(100)}],"backendQosError":[{"totalCount":getRandomInt(100)}]}
 );
}

const getEdgeDosCountPerErrorAndAction = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json( {"shapeInterval":[{"error":"total","count":getRandomInt(100)},{"error":"protocolError","count":getRandomInt(100)},{"error":"routingError","count":getRandomInt(100)},{"error":"contentError","count":getRandomInt(100)},{"error":"authenticationError","count":getRandomInt(100)},{"error":"qosError","count":getRandomInt(100)},{"error":"wafError","count":getRandomInt(100)}],"shapeForever":[{"error":"total","count":getRandomInt(100)},{"error":"protocolError","count":getRandomInt(100)},{"error":"routingError","count":getRandomInt(100)},{"error":"contentError","count":getRandomInt(100)},{"error":"authenticationError","count":getRandomInt(100)},{"error":"qosError","count":getRandomInt(100)},{"error":"wafError","count":getRandomInt(100)}],"blockInterval":[{"error":"total","count":getRandomInt(100)},{"error":"protocolError","count":getRandomInt(100)},{"error":"routingError","count":getRandomInt(100)},{"error":"contentError","count":getRandomInt(100)},{"error":"authenticationError","count":getRandomInt(100)},{"error":"qosError","count":getRandomInt(100)},{"error":"wafError","count":getRandomInt(100)}],"blockForever":[{"error":"total","count":getRandomInt(100)},{"error":"protocolError","count":getRandomInt(100)},{"error":"routingError","count":getRandomInt(100)},{"error":"contentError","count":getRandomInt(100)},{"error":"authenticationError","count":getRandomInt(100)},{"error":"qosError","count":getRandomInt(100)},{"error":"wafError","count":getRandomInt(100)}]} );
}

const getEdgeDosHighCountPerAction = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json( [{"action":"dosActionShapeForIntervalCount","count":getRandomInt(100),"high":getRandomInt(100)},{"action":"dosActionShapeForeverCount","count":getRandomInt(100),"high":getRandomInt(100)},{"action":"dosActionBlockIntervalCount","count":getRandomInt(100),"high":getRandomInt(100)},{"action":"dosActionBlockForeverCount","count":getRandomInt(100),"high":getRandomInt(100)}] );
}

const getEdgeHttpLimit = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json([{"action":"403ForbiddenMaxNumberOfHeadersAndTrailersExceeded","count":getRandomInt(100)},{"action":"405MethodNotAllowed","count":getRandomInt(100)},{"action":"413RequestEntityTooLargeBody","count":getRandomInt(100)},{"action":"414RequestUriTooLargePath","count":getRandomInt(100)},{"action":"431RequestHeaderFieldsTooLarge","count":getRandomInt(100)}]);
}

const getEdgeWaf = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json( {"requestScannerDetection": [],"requestProtocolEnforcement": [],"requestProtocolAttack": [],"requestApplicationAttackLfi": [{"ruleId":"930110","count":getRandomInt(100)},
{"ruleId":"930120","count":getRandomInt(100)}],"requestApplicationAttackRfi": [],"requestApplicationAttackRce": [],"requestApplicationAttackPhp": [],"requestApplicationAttackXss": [],"requestApplicationAttackSqli": [],"requestApplicationAttackSessionFixation": [],"responseDataLeakages": [],"responseDataLeakagesSql": [],"responseDataLeakagesJava": [],"responseDataLeakagesPhp": [],"responseDataLeakagesIis": []} );
}
 
const getEdgeSid = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json( [{"category":"PII","name":"SSNValueTextPlain","api":"/fill","direction":"Response","count":getRandomInt(100)},{"category":"PII","name":"SSNValueTextPlain","api":"/send","direction":"Request","count":getRandomInt(100)},{"category":"PII","name":"taxIdTextPlain","api":"/form","direction":"Response","count":getRandomInt(100)},{"category":"PII","name":"DOBTextPlain","api":"/end","direction":"Response","count": getRandomInt(100)}] );
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    getHome,
    getTest,
    getSysInfo,
    getBackendViolationPerApi,    
    getEdgeDosCountPerErrorAndAction,
    getEdgeDosHighCountPerAction,
    getEdgeHttpLimit,
    getEdgeWaf,
    getEdgeSid
}
