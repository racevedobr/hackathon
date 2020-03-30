import TokenService from '../../services/tokenService';

class ChatController {
  async post(req, res) {
    const deviceId = req.body.device;
    const { identify } = req.body;

    const token = await TokenService.generate(identify, deviceId);

    const jwtToken = token.toJwt();

    res.json({
      identify,
      jwtToken,
    });
  }
}

export default new ChatController();
