import { dynamoDB } from '../config/awsConfig.js';

// Obtener todos los lanzamientos
export const getAllLaunches = async (req, res) => {
  try {
    const params = {
      TableName: 'SpaceX_Launches',
    };
    const data = await dynamoDB.scan(params).promise();
    res.json(data.Items);
  } catch (error) {
    console.error('Error al obtener los lanzamientos:', error);
    res.status(500).json({ error: 'Error al obtener los lanzamientos' });
  }
};

// Obtener resumen (success, failed, upcoming)
export const getLaunchSummary = async (req, res) => {
  try {
    const params = {
      TableName: 'SpaceX_Launches',
    };
    const data = await dynamoDB.scan(params).promise();

    const summary = {
      success: data.Items.filter(item => item.status === 'success').length,
      failed: data.Items.filter(item => item.status === 'failed').length,
      upcoming: data.Items.filter(item => item.status === 'upcoming').length,
    };

    res.json(summary);
  } catch (error) {
    console.error('Error al obtener el resumen:', error);
    res.status(500).json({ error: 'Error al obtener el resumen' });
  }
};
