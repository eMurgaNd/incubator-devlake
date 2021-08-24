package services

import (
	"github.com/merico-dev/lake/config"
	"github.com/merico-dev/lake/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

func init() {
	var connectionString = config.V.GetString("DB_URL")
	var err error
	db, err = gorm.Open(mysql.Open(connectionString), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	migrateDB()
}

func migrateDB() {
	db.AutoMigrate(&models.Source{})
}
