using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MySql.Data.MySqlClient;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller

    {
        public int i = 0;
        string info = "MVC5";
        MySqlConnection myconn = null;
        MySqlCommand mycomm = null;
        MySqlDataReader myreader = null;
        [HttpPost]
        public string connect()
        {
            i++;
            if (i == 1)
            {              
                myconn = new MySqlConnection("Server=localhost;Database=position;Uid=root;Pwd=admin");
                myconn.Open();
            }
            
            //if (myconn.State.ToString() == "Open")
            //{
            //    info += "连接mysql成功";
            //}
            //else
            //{
            //    info += "连接mysql失败";
            //}
            //mycomm = new MySqlCommand("SELECT * FROM positiontable WHERE sequence=(SELECT MAX(sequence) from positiontable WHERE tag='1') OR sequence=(SELECT MAX(sequence) from positiontable WHERE tag='2')", myconn);
            //myreader = mycomm.ExecuteReader();
            //while (myreader.Read())
            //{
            //    info += myreader["tag"] + "---" + myreader["sequence"];
            //}
            //myreader.Close();
            //myconn.Close();
            try
            {
                info = dataRead(myconn, mycomm, myreader);
            }
            catch
            {
                myconn = new MySqlConnection("Server=localhost;Database=position;Uid=root;Pwd=admin");
                myconn.Open();
                info = dataRead(myconn, mycomm, myreader);
            }
            //dataClose(myconn, myreader);
            //ViewData["msg"] = info;

           return info;
        }
        public string dataRead(MySqlConnection myconn, MySqlCommand mycomm, MySqlDataReader myreader)
        {
            string infor = "";
            string Transfer = "";
            if (myconn.State.ToString() == "Open")
            {
                infor = "连接mysql成功";
            }
            else
            {
                infor = "连接mysql失败";
            }
            mycomm = new MySqlCommand("SELECT * FROM positiontable WHERE sequence=(SELECT MAX(sequence) from positiontable WHERE tag='1') OR sequence=(SELECT MAX(sequence) from positiontable WHERE tag='2')", myconn);
            myreader = mycomm.ExecuteReader();
            while (myreader.Read())
            {
                Transfer += myreader["tag"] + ";" + myreader["positionX"] + ";" + myreader["positionX"] + ";" + myreader["sequence"] + ";" + "n";
            }
            myreader.Close();
            myconn.Close();
            return Transfer;
        }
        public void dataClose(MySqlConnection myconn, MySqlDataReader myreader)
        {
            myreader.Close();
            myconn.Close();
        }
        
        public ActionResult Index()
        {
           // connect();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}