
const defaults = {
  userName: ["Инженер", "Петров И.У."],
  hour_textHour: {
    "0": '2020-04-30 00:00',
    "1": '2020-04-30 01:00',
    "2": '2020-04-30 02:00',
    "3": '2020-04-30 03:00',
    "4": '2020-04-30 04:00',
    "5": '2020-04-30 05:00',
    "6": '2020-04-30 06:00',
    "7": '2020-04-30 07:00',
    "8": '2020-04-30 08:00',
    '9': '2020-04-30 09:00',
    "10": '2020-04-30 10:00',
    "11": '2020-04-30 11:00',
    "12": '2020-04-30 12:00',
    "13": '2020-04-30 13:00',
    "14": '2020-04-30 14:00',
    "15": '2020-04-30 15:00',
    "16": '2020-04-30 16:00',
    "17": '2020-04-30 17:00',
    "18": '2020-04-30 18:00',
    "19": '2020-04-30 19:00',
    "20": '2020-04-30 20:00',
    "21": '2020-04-30 21:00',
    "22": '2020-04-30 22:00',
    "23": '2020-04-30 23:00',
    "24": '2020-04-30 24:00',
  },
  typeAlarm_to_color: {
    "incident": "danger",
    "high probability incident": "warning",
    "probability incident": "info"
  },
  targets_get_real_and_pred_data: [
    'start_stop_alige_count_', 'start_stop_alige_count_Alive',
    'start_stop_alige_count_Start', 'start_stop_alige_count_Stop',
    'type__count_Billing-Accounting', 'type__count_Billing-Authentication',
    'mean_delay', 'mean_input_trafic', 'mean_output_trafic',
    'count_failed'
  ],
  data_forecasting: [{
    "xticks": [],
    "start_stop_alige_count_Start_pred": [],
    "start_stop_alige_count_Stop_pred": [],
    "type__count_Billing-Accounting_pred": [],
    "type__count_Billing-Authentication_pred": [],
    "mean_delay_pred": [],
    "mean_input_trafic_pred": [],
    "mean_output_trafic_pred": [],
    "count_failed_pred": [],
    "start_stop_alige_count_Start": [],
    "start_stop_alige_count_Stop": [],
    "type__count_Billing-Accounting": [],
    "type__count_Billing-Authentication": [],
    "mean_delay": [],
    "mean_input_trafic": [],
    "mean_output_trafic": [],
    "count_failed": []
  }],
  data_forecasting_error_std: {
    "start_stop_alige_count_Start": 6000,
    "start_stop_alige_count_Stop": 5000,
    "type__count_Billing-Accounting": 36000,
    "type__count_Billing-Authentication": 3000,
    "mean_delay": 0.02,
    "mean_input_trafic": 300,
    "mean_output_trafic": 2200,
    "count_failed": 220,
  },
  data_forecasting_title: {
    "start_stop_alige_count_Start": "Count Start",
    "start_stop_alige_count_Stop": "Count Stop",
    "type__count_Billing-Accounting": "Count Billing Accounting",
    "type__count_Billing-Authentication": "Count Billing Authentication",
    "mean_delay": "Mean Delay",
    "mean_input_trafic": "Input Traffic",
    "mean_output_trafic": "Output Traffic",
    "count_failed": "Count Failed",
  },
  detail_alert_example: [
    ["2020-04-30 23:38:33", "Authentication", "-", "9usLa9HA-W8@dhcp", "89.239.189.1", "70:2e:22:6b:41:c5", "-", "OK", "0.09", "-", "-"],
    ["2020-04-30 23:38:33", "Accounting", "-", "9usLa9HA-W8@dhcp", "89.239.189.1", "70:2e:22:6b:41:c5", "Start", "OK", "0.06", "-", "-"],
    ["2020-04-30 23:38:34", "Accounting", "2", "9usLa9HA-W8@dhcp", "-", "-", "Start", "OK", "0.01", "-", "-"],
    ["2020-04-30 23:38:34", "Accounting", "3", "9usLa9HA-W8@dhcp", "-", "-", "Start", "OK", "0.01", "-", "-"],
    ["2020-04-30 23:38:34", "Accounting", "4", "9usLa9HA-W8@dhcp", "-", "-", "Start", "OK", "0.01", "-", "-"],
    ["2020-04-30 23:38:34", "Accounting", "1", "9usLa9HA-W8@dhcp", "-", "-", "Start", "OK", "0.01", "-", "-"],
    ["2020-04-30 23:38:34", "Accounting", "6", "9usLa9HA-W8@dhcp", "-", "-", "Start", "OK", "0.01", "-", "-"],
    ["2020-04-30 23:38:34", "Accounting", "5", "9usLa9HA-W8@dhcp", "-", "-", "Start", "OK", "0.01", "-", "-"],
    ["2020-04-30 23:55:36", "Accounting", "-", "9usLa9HA-W8@dhcp", "-", "-", "-", "OK Skiped due to traffic limit", "-", "-", "-"],
    ["2020-04-30 23:55:36", "Accounting", "-", "9usLa9HA-W8@dhcp", "-", "-", "-", "OK Skiped due to traffic limit", "-", "-", "-"],
    ["2020-04-30 23:55:36", "Accounting", "-", "9usLa9HA-W8@dhcp", "-", "-", "-", "OK Skiped due to traffic limit", "-", "-", "-"],
    ["2020-04-30 23:55:36", "Accounting", "-", "9usLa9HA-W8@dhcp", "-", "-", "-", "OK Skiped due to traffic limit", "-", "-", "-"],
    ["2020-04-30 23:55:36", "Accounting", "-", "9usLa9HA-W8@dhcp", "-", "-", "-", "OK Skiped due to traffic limit", "-", "-", "-"],
    ["2020-04-30 23:55:36", "Accounting", "-", "9usLa9HA-W8@dhcp", "89.239.189.1", "70:2e:22:6b:41:c5", "Stop", "FAILED Tarification error.", "0.138", "62941", "34062"],
    ["2020-04-30 23:55:36", "Accounting", "5", "9usLa9HA-W8@dhcp", "89.239.189.1", "70:2e:22:6b:41:c5", "Stop", "OK", "0.189", "62941", "34062"]
  ]
};

export default defaults;
